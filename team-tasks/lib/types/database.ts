// Database entity types
export interface Assignee {
  id: string
  name: string
  email: string
  phone: string | null
  role: string
  department: string
  avatar: string | null
  join_date: string
  tasks_completed: number
  current_tasks: number
  overdue_tasks: number
  created_at: string
  updated_at: string
}

export interface Task {
  id: string
  title: string
  description: string | null
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in-progress' | 'completed'
  assignee_id: string | null
  assignee_name: string | null
  due_date: string | null
  created_at: string
  updated_at: string
}

export interface Department {
  id: number
  name: string
  description: string | null
  created_at: string
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Query parameter types
export interface TaskFilters {
  status?: string
  priority?: string
  assignee_id?: string
  department?: string
  search?: string
}

export interface PaginationParams {
  page?: number
  limit?: number
} 