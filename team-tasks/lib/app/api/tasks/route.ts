import { NextRequest, NextResponse } from 'next/server'
import { executeQuery, executeSingleQuery, executeMutation } from '@/lib/database'
import { Task, ApiResponse } from '@/types/database'

// GET /api/tasks - Get all tasks with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const priority = searchParams.get('priority')
    const assignee_id = searchParams.get('assignee_id')
    const department = searchParams.get('department')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    let query = `
      SELECT t.*, a.name as assignee_name, a.department as assignee_department
      FROM tasks t
      LEFT JOIN assignees a ON t.assignee_id = a.id
    `
    const params: (string | number)[] = []

    const conditions: string[] = []

    if (status) {
      conditions.push('t.status = ?')
      params.push(status)
    }

    if (priority) {
      conditions.push('t.priority = ?')
      params.push(priority)
    }

    if (assignee_id) {
      conditions.push('t.assignee_id = ?')
      params.push(assignee_id)
    }

    if (department) {
      conditions.push('a.department = ?')
      params.push(department)
    }

    if (search) {
      conditions.push('(t.title LIKE ? OR t.description LIKE ? OR a.name LIKE ?)')
      const searchParam = `%${search}%`
      params.push(searchParam, searchParam, searchParam)
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ')
    }

    // Get total count for pagination
    const countQuery = query.replace('SELECT t.*, a.name as assignee_name, a.department as assignee_department', 'SELECT COUNT(*) as total')
    const countResult = await executeSingleQuery<{ total: number }>(countQuery, params)
    const total = countResult?.total || 0

    // Add pagination and ordering
    query += ' ORDER BY t.created_at DESC LIMIT ? OFFSET ?'
    params.push(limit, offset)

    const tasks = await executeQuery<Task>(query, params)

    const response = {
      success: true,
      data: tasks,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching tasks:', error)
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch tasks'
    }
    return NextResponse.json(response, { status: 500 })
  }
}

// POST /api/tasks - Create new task
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, priority, status, assignee_id, due_date } = body

    // Validate required fields
    if (!title) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Title is required'
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Generate UUID for id
    const id = crypto.randomUUID()

    // Get assignee name if assignee_id is provided
    let assignee_name = null
    if (assignee_id) {
      const assignee = await executeSingleQuery<{ name: string }>(
        'SELECT name FROM assignees WHERE id = ?',
        [assignee_id]
      )
      assignee_name = assignee?.name || null
    }

    const insertQuery = `
      INSERT INTO tasks (id, title, description, priority, status, assignee_id, assignee_name, due_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    await executeMutation(insertQuery, [
      id, title, description || null, priority || 'medium', status || 'todo',
      assignee_id || null, assignee_name, due_date || null
    ])

    // Update assignee stats if assignee_id is provided
    if (assignee_id) {
      await executeMutation(`
        UPDATE assignees 
        SET current_tasks = (
          SELECT COUNT(*) FROM tasks 
          WHERE assignee_id = ? AND status IN ('todo', 'in-progress')
        )
        WHERE id = ?
      `, [assignee_id, assignee_id])
    }

    // Fetch the created task
    const newTask = await executeSingleQuery<Task>(
      'SELECT * FROM tasks WHERE id = ?',
      [id]
    )

    const response: ApiResponse<Task> = {
      success: true,
      data: newTask!,
      message: 'Task created successfully'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Error creating task:', error)
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to create task'
    }
    return NextResponse.json(response, { status: 500 })
  }
} 