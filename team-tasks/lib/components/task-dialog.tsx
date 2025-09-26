"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, User, Plus, Edit2 } from "lucide-react"
import type { Task } from "@/types/task"
import { getAssigneeNames } from "@/data/assignees"

// Zod schema for task form validation
const taskFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters")
    .trim(),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "Please select a priority level",
  }),
  status: z.enum(["todo", "in-progress", "completed"], {
    required_error: "Please select a status",
  }),
  assigneeName: z
    .string()
    .min(1, "Please select an assignee"),
  dueDate: z
    .string()
    .optional()
    .refine((date) => {
      if (!date) return true // Optional field
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, "Due date cannot be in the past"),
})

type TaskFormValues = z.infer<typeof taskFormSchema>

interface TaskDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: TaskFormValues) => void
  loading?: boolean
  task?: Task | null // null for create, Task object for edit
}

export function TaskDialog({ 
  open, 
  onOpenChange, 
  onSubmit, 
  loading = false, 
  task 
}: TaskDialogProps) {
  const isEditing = !!task
  const assigneeNames = getAssigneeNames()

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "medium",
      status: "todo",
      assigneeName: "",
      dueDate: "",
    },
    mode: "onChange", // Enable real-time validation
  })

  // Reset form when dialog opens/closes or task changes
  useEffect(() => {
    if (open) {
      if (isEditing && task) {
        form.reset({
          title: task.title,
          description: task.description || "",
          priority: task.priority,
          status: task.status,
          assigneeName: task.assigneeName || "",
          dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : "",
        })
      } else {
        form.reset({
          title: "",
          description: "",
          priority: "medium",
          status: "todo",
          assigneeName: "",
          dueDate: "",
        })
      }
    }
  }, [open, task, isEditing, form])

  const handleSubmit = (data: TaskFormValues) => {
    onSubmit(data)
    onOpenChange(false)
  }

  const handleCancel = () => {
    form.reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isEditing ? (
              <>
                <Edit2 className="h-5 w-5" />
                Edit Task
              </>
            ) : (
              <>
                <Plus className="h-5 w-5" />
                Create New Task
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Update the task details below."
              : "Fill in the details to create a new task for your team."
            }
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Title Field */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Title *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter task title..." 
                      {...field} 
                      className="transition-colors focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter task description..."
                      className="resize-none min-h-[100px] transition-colors focus:ring-2 focus:ring-primary/20"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide additional details about the task (optional, max 500 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Priority and Status Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Priority *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="transition-colors focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Status *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="transition-colors focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Assignee and Due Date Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="assigneeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1 text-sm font-medium">
                      <User className="h-4 w-4" />
                      Assignee *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="transition-colors focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Select assignee" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {assigneeNames.map((name) => (
                          <SelectItem key={name} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1 text-sm font-medium">
                      <Calendar className="h-4 w-4" />
                      Due Date
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                        className="transition-colors focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormDescription>
                      Optional due date for the task
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Form Actions */}
            <DialogFooter className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={loading}
                className="flex-1 sm:flex-none"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={loading || !form.formState.isValid}
                className="flex-1 sm:flex-none min-w-[120px]"
              >
                {loading ? (
                  "Saving..."
                ) : isEditing ? (
                  "Update Task"
                ) : (
                  "Create Task"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 