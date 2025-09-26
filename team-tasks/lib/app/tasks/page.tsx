"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TaskCard } from "@/components/task-card"
import { TaskDialog } from "@/components/task-dialog"
import { Plus } from "lucide-react"
import type { Task } from "@/types/task"

// Import the form values type from the dialog component
type TaskFormValues = {
  title: string
  description?: string
  priority: "low" | "medium" | "high"
  status: "todo" | "in-progress" | "completed"
  assigneeName: string
  dueDate?: string
}

// Sample tasks data
const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Design new landing page",
    description: "Create a modern and responsive landing page design for the new product launch",
    priority: "high",
    status: "in-progress",
    assigneeName: "Sarah Johnson",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20"),
    dueDate: new Date("2024-02-01"),
  },
  {
    id: "2",
    title: "Implement user authentication",
    description: "Add secure user authentication with JWT tokens and role-based access control",
    priority: "high",
    status: "todo",
    assigneeName: "Mike Chen",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    dueDate: new Date("2024-01-25"),
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Create comprehensive API documentation with examples and usage guidelines",
    priority: "medium",
    status: "completed",
    assigneeName: "Emily Davis",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-18"),
    dueDate: new Date("2024-01-20"),
  },
  {
    id: "4",
    title: "Set up CI/CD pipeline",
    description: "Configure automated testing and deployment pipeline for the project",
    priority: "medium",
    status: "todo",
    assigneeName: "Alex Rodriguez",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    dueDate: new Date("2024-01-30"),
  },
  {
    id: "5",
    title: "Optimize database queries",
    description: "Review and optimize slow database queries to improve application performance",
    priority: "low",
    status: "in-progress",
    assigneeName: "David Kim",
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-19"),
    dueDate: new Date("2024-02-05"),
  },
]

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCreateTask = async (data: TaskFormValues) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newTask: Task = {
        id: Date.now().toString(),
        title: data.title,
        description: data.description,
        priority: data.priority,
        status: data.status,
        assigneeName: data.assigneeName,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
      }
      
      setTasks(prev => [newTask, ...prev])
    } catch (error) {
      console.error("Failed to create task:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleEditTask = async (data: TaskFormValues) => {
    if (!editingTask) return
    
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const updatedTask: Task = {
        ...editingTask,
        title: data.title,
        description: data.description,
        priority: data.priority,
        status: data.status,
        assigneeName: data.assigneeName,
        updatedAt: new Date(),
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
      }
      
      setTasks(prev => prev.map(task => 
        task.id === editingTask.id ? updatedTask : task
      ))
      setEditingTask(null)
    } catch (error) {
      console.error("Failed to update task:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteTask = async (taskId: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      setTasks(prev => prev.filter(task => task.id !== taskId))
    } catch (error) {
      console.error("Failed to delete task:", error)
    }
  }

  const handleEditClick = (task: Task) => {
    setEditingTask(task)
    setDialogOpen(true)
  }

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open)
    if (!open) {
      setEditingTask(null)
    }
  }

  const handleSubmit = (data: TaskFormValues) => {
    if (editingTask) {
      handleEditTask(data)
    } else {
      handleCreateTask(data)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Tasks</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track your team&apos;s tasks and projects
          </p>
        </div>
        <Button 
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Create Task
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => handleEditClick(task)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Plus className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium">No tasks yet</h3>
            <p>Create your first task to get started</p>
          </div>
          <Button onClick={() => setDialogOpen(true)}>
            Create Your First Task
          </Button>
        </div>
      )}

      <TaskDialog
        open={dialogOpen}
        onOpenChange={handleDialogOpenChange}
        onSubmit={handleSubmit}
        loading={loading}
        task={editingTask}
      />
    </div>
  )
} 