export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assigneeId?: string;
  assigneeName?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  assigneeId?: string;
  dueDate?: Date;
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  status?: 'todo' | 'in-progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  assigneeId?: string;
  dueDate?: Date;
} 