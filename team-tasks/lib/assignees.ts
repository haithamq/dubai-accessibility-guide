import { executeQuery, executeSingleQuery } from './database'
import { Assignee } from '@/types/database'

// Fetch all assignees from database
export async function getAssignees(department?: string): Promise<Assignee[]> {
  try {
    let query = 'SELECT * FROM assignees'
    const params: string[] = []

    if (department) {
      query += ' WHERE department = ?'
      params.push(department)
    }

    query += ' ORDER BY name ASC'
    return await executeQuery<Assignee>(query, params)
  } catch (error) {
    console.error('Error fetching assignees:', error)
    return []
  }
}

// Fetch assignee by ID
export async function getAssigneeById(id: string): Promise<Assignee | null> {
  try {
    return await executeSingleQuery<Assignee>(
      'SELECT * FROM assignees WHERE id = ?',
      [id]
    )
  } catch (error) {
    console.error('Error fetching assignee:', error)
    return null
  }
}

// Get assignee statistics
export async function getAssigneeStats() {
  try {
    const stats = await executeSingleQuery<{
      total_assignees: number
      total_tasks_completed: number
      total_current_tasks: number
      total_overdue_tasks: number
    }>(`
      SELECT 
        COUNT(*) as total_assignees,
        SUM(tasks_completed) as total_tasks_completed,
        SUM(current_tasks) as total_current_tasks,
        SUM(overdue_tasks) as total_overdue_tasks
      FROM assignees
    `)

    return stats || {
      total_assignees: 0,
      total_tasks_completed: 0,
      total_current_tasks: 0,
      total_overdue_tasks: 0
    }
  } catch (error) {
    console.error('Error fetching assignee stats:', error)
    return {
      total_assignees: 0,
      total_tasks_completed: 0,
      total_current_tasks: 0,
      total_overdue_tasks: 0
    }
  }
}

// Get assignees by department
export async function getAssigneesByDepartment(department: string): Promise<Assignee[]> {
  try {
    return await executeQuery<Assignee>(
      'SELECT * FROM assignees WHERE department = ? ORDER BY name ASC',
      [department]
    )
  } catch (error) {
    console.error('Error fetching assignees by department:', error)
    return []
  }
}

// Search assignees
export async function searchAssignees(searchTerm: string): Promise<Assignee[]> {
  try {
    const searchParam = `%${searchTerm}%`
    return await executeQuery<Assignee>(
      'SELECT * FROM assignees WHERE name LIKE ? OR email LIKE ? OR role LIKE ? ORDER BY name ASC',
      [searchParam, searchParam, searchParam]
    )
  } catch (error) {
    console.error('Error searching assignees:', error)
    return []
  }
} 