import { db } from '@/db'
import { assignees, tasks, departments } from '@/db/schema'
import { eq, desc, asc, like, and, or } from 'drizzle-orm'
import type { NewAssignee, NewTask } from '@/db/schema'

// Assignee operations
export async function getAllAssignees(department?: string) {
  try {
    if (department) {
      return await db.select().from(assignees).where(eq(assignees.department, department)).orderBy(asc(assignees.name))
    }
    return await db.select().from(assignees).orderBy(asc(assignees.name))
  } catch (error) {
    console.error('Error fetching assignees:', error)
    return []
  }
}

export async function getAssigneeById(id: string) {
  try {
    const result = await db.select().from(assignees).where(eq(assignees.id, id)).limit(1)
    return result[0] || null
  } catch (error) {
    console.error('Error fetching assignee:', error)
    return null
  }
}

export async function createAssignee(data: NewAssignee) {
  try {
    const result = await db.insert(assignees).values(data).returning()
    return result[0] || null
  } catch (error) {
    console.error('Error creating assignee:', error)
    return null
  }
}

// Task operations
export async function getAllTasks(filters?: {
  status?: 'todo' | 'in-progress' | 'completed'
  priority?: 'low' | 'medium' | 'high'
  assignee_id?: string
  search?: string
  page?: number
  limit?: number
}) {
  try {
    const page = filters?.page || 1
    const limit = filters?.limit || 10
    const offset = (page - 1) * limit

    let query = db.select().from(tasks)

    const conditions = []

    if (filters?.status) {
      conditions.push(eq(tasks.status, filters.status))
    }

    if (filters?.priority) {
      conditions.push(eq(tasks.priority, filters.priority))
    }

    if (filters?.assignee_id) {
      conditions.push(eq(tasks.assigneeId, filters.assignee_id))
    }

    if (filters?.search) {
      conditions.push(
        or(
          like(tasks.title, `%${filters.search}%`),
          like(tasks.description || '', `%${filters.search}%`),
          like(tasks.assigneeName || '', `%${filters.search}%`)
        )
      )
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions))
    }

    const result = await query.orderBy(desc(tasks.createdAt)).limit(limit).offset(offset)

    return {
      tasks: result,
      pagination: {
        page,
        limit,
        total: result.length,
        totalPages: Math.ceil(result.length / limit)
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

export async function getTaskById(id: string) {
  try {
    const result = await db.select().from(tasks).where(eq(tasks.id, id)).limit(1)
    return result[0] || null
  } catch (error) {
    console.error('Error fetching task:', error)
    return null
  }
}

export async function createTask(data: NewTask) {
  try {
    const result = await db.insert(tasks).values(data).returning()
    return result[0] || null
  } catch (error) {
    console.error('Error creating task:', error)
    return null
  }
}

export async function updateTaskStatus(taskId: string, status: 'todo' | 'in-progress' | 'completed') {
  try {
    const result = await db.update(tasks)
      .set({ status, updatedAt: new Date() })
      .where(eq(tasks.id, taskId))
      .returning()
    return result[0] || null
  } catch (error) {
    console.error('Error updating task status:', error)
    return null
  }
}

// Department operations
export async function getAllDepartments() {
  try {
    return await db.select().from(departments).orderBy(asc(departments.name))
  } catch (error) {
    console.error('Error fetching departments:', error)
    return []
  }
} 