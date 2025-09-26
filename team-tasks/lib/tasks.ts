import { executeQuery, executeSingleQuery, executeMutation } from './database'
import { Task } from '@/types/database'

// Fetch all tasks from database
export async function getTasks(filters?: {
  status?: string
  priority?: string
  assignee_id?: string
  department?: string
  search?: string
  page?: number
  limit?: number
}): Promise<{ tasks: Task[], pagination: { page: number; limit: number; total: number; totalPages: number } }> {
  try {
    const page = filters?.page || 1
    const limit = filters?.limit || 10
    const offset = (page - 1) * limit

    let query = `
      SELECT t.*, a.name as assignee_name, a.department as assignee_department
      FROM tasks t
      LEFT JOIN assignees a ON t.assignee_id = a.id
    `
    const params: (string | number)[] = []

    const conditions: string[] = []

    if (filters?.status) {
      conditions.push('t.status = ?')
      params.push(filters.status)
    }

    if (filters?.priority) {
      conditions.push('t.priority = ?')
      params.push(filters.priority)
    }

    if (filters?.assignee_id) {
      conditions.push('t.assignee_id = ?')
      params.push(filters.assignee_id)
    }

    if (filters?.department) {
      conditions.push('a.department = ?')
      params.push(filters.department)
    }

    if (filters?.search) {
      conditions.push('(t.title LIKE ? OR t.description LIKE ? OR a.name LIKE ?)')
      const searchParam = `%${filters.search}%`
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

    return {
      tasks,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return {
      tasks: [],
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
      }
    }
  }
}

// Fetch task by ID
export async function getTaskById(id: string): Promise<Task | null> {
  try {
    return await executeSingleQuery<Task>(
      'SELECT * FROM tasks WHERE id = ?',
      [id]
    )
  } catch (error) {
    console.error('Error fetching task:', error)
    return null
  }
}

// Get task statistics
export async function getTaskStats() {
  try {
    const stats = await executeSingleQuery<{
      total_tasks: number
      completed_tasks: number
      in_progress_tasks: number
      todo_tasks: number
      high_priority_tasks: number
      overdue_tasks: number
    }>(`
      SELECT 
        COUNT(*) as total_tasks,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_tasks,
        SUM(CASE WHEN status = 'in-progress' THEN 1 ELSE 0 END) as in_progress_tasks,
        SUM(CASE WHEN status = 'todo' THEN 1 ELSE 0 END) as todo_tasks,
        SUM(CASE WHEN priority = 'high' THEN 1 ELSE 0 END) as high_priority_tasks,
        SUM(CASE WHEN due_date < CURDATE() AND status != 'completed' THEN 1 ELSE 0 END) as overdue_tasks
      FROM tasks
    `)

    return stats || {
      total_tasks: 0,
      completed_tasks: 0,
      in_progress_tasks: 0,
      todo_tasks: 0,
      high_priority_tasks: 0,
      overdue_tasks: 0
    }
  } catch (error) {
    console.error('Error fetching task stats:', error)
    return {
      total_tasks: 0,
      completed_tasks: 0,
      in_progress_tasks: 0,
      todo_tasks: 0,
      high_priority_tasks: 0,
      overdue_tasks: 0
    }
  }
}

// Update task status
export async function updateTaskStatus(taskId: string, status: string): Promise<boolean> {
  try {
    await executeMutation(
      'UPDATE tasks SET status = ? WHERE id = ?',
      [status, taskId]
    )
    return true
  } catch (error) {
    console.error('Error updating task status:', error)
    return false
  }
}

// Update task assignee
export async function updateTaskAssignee(taskId: string, assigneeId: string | null): Promise<boolean> {
  try {
    let assigneeName = null
    if (assigneeId) {
      const assignee = await executeSingleQuery<{ name: string }>(
        'SELECT name FROM assignees WHERE id = ?',
        [assigneeId]
      )
      assigneeName = assignee?.name || null
    }

    await executeMutation(
      'UPDATE tasks SET assignee_id = ?, assignee_name = ? WHERE id = ?',
      [assigneeId, assigneeName, taskId]
    )
    return true
  } catch (error) {
    console.error('Error updating task assignee:', error)
    return false
  }
} 