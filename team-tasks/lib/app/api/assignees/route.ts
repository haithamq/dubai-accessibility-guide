import { NextRequest, NextResponse } from 'next/server'
import { executeQuery, executeSingleQuery, executeMutation } from '@/lib/database'
import { Assignee, ApiResponse } from '@/types/database'

// GET /api/assignees - Get all assignees
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const department = searchParams.get('department')
    const search = searchParams.get('search')

    let query = 'SELECT * FROM assignees'
    const params: string[] = []

    if (department) {
      query += ' WHERE department = ?'
      params.push(department)
    }

    if (search) {
      const searchCondition = 'name LIKE ? OR email LIKE ? OR role LIKE ?'
      if (department) {
        query += ' AND (' + searchCondition + ')'
      } else {
        query += ' WHERE ' + searchCondition
      }
      const searchParam = `%${search}%`
      params.push(searchParam, searchParam, searchParam)
    }

    query += ' ORDER BY name ASC'

    const assignees = await executeQuery<Assignee>(query, params)

    const response: ApiResponse<Assignee[]> = {
      success: true,
      data: assignees
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching assignees:', error)
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch assignees'
    }
    return NextResponse.json(response, { status: 500 })
  }
}

// POST /api/assignees - Create new assignee
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, role, department, avatar } = body

    // Validate required fields
    if (!name || !email || !role || !department) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Missing required fields: name, email, role, department'
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Check if email already exists
    const existingAssignee = await executeSingleQuery<Assignee>(
      'SELECT id FROM assignees WHERE email = ?',
      [email]
    )

    if (existingAssignee) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Email already exists'
      }
      return NextResponse.json(response, { status: 409 })
    }

    // Generate UUID for id
    const id = crypto.randomUUID()
    const joinDate = new Date().toISOString().split('T')[0]

    const insertQuery = `
      INSERT INTO assignees (id, name, email, phone, role, department, avatar, join_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    await executeMutation(insertQuery, [
      id, name, email, phone || null, role, department, avatar || null, joinDate
    ])

    // Fetch the created assignee
    const newAssignee = await executeSingleQuery<Assignee>(
      'SELECT * FROM assignees WHERE id = ?',
      [id]
    )

    const response: ApiResponse<Assignee> = {
      success: true,
      data: newAssignee!,
      message: 'Assignee created successfully'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Error creating assignee:', error)
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to create assignee'
    }
    return NextResponse.json(response, { status: 500 })
  }
} 