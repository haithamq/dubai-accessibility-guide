"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Calendar, 
  Edit2, 
  Check, 
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Task } from "@/types/task"
import { getAssigneeByName, getAssigneeNames } from "@/data/assignees"

interface TaskCardProps {
  task: Task
  onEdit?: (task: Task) => void
  onDelete?: (taskId: string) => void
  onAssigneeChange?: (taskId: string, assigneeId: string, assigneeName: string) => void
}

export function TaskCard({ task, onEdit, onDelete, onAssigneeChange }: TaskCardProps) {
  const [isEditingAssignee, setIsEditingAssignee] = useState(false)
  const [newAssigneeName, setNewAssigneeName] = useState(task.assigneeName || "")
  const assigneeNames = getAssigneeNames()

  const handleAssigneeSave = () => {
    if (onAssigneeChange && newAssigneeName.trim()) {
      const assignee = getAssigneeByName(newAssigneeName.trim())
      onAssigneeChange(task.id, assignee?.id || "", newAssigneeName.trim())
      setIsEditingAssignee(false)
    }
  }

  const handleAssigneeCancel = () => {
    setNewAssigneeName(task.assigneeName || "")
    setIsEditingAssignee(false)
  }

  const getPriorityVariant = (priority: Task['priority']) => {
    switch (priority) {
      case 'low':
        return 'secondary'
      case 'medium':
        return 'default'
      case 'high':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  const getStatusVariant = (status: Task['status']) => {
    switch (status) {
      case 'todo':
        return 'secondary'
      case 'in-progress':
        return 'default'
      case 'completed':
        return 'default'
      default:
        return 'secondary'
    }
  }

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'completed'

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const assignee = getAssigneeByName(task.assigneeName || "")

  return (
    <Card className={cn(
      "w-full transition-all duration-200 hover:shadow-lg border-border/50",
      isOverdue && "border-destructive/50 bg-destructive/5"
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1 min-w-0">
            <CardTitle className="text-xl font-semibold leading-tight line-clamp-2">
              {task.title}
            </CardTitle>
            {task.description && (
              <CardDescription className="text-sm leading-relaxed line-clamp-3">
                {task.description}
              </CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge variant={getPriorityVariant(task.priority)} className="text-xs">
              {task.priority}
            </Badge>
            <Badge 
              variant={getStatusVariant(task.status)}
              className={cn(
                "text-xs capitalize",
                task.status === 'completed' && "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800"
              )}
            >
              {task.status.replace('-', ' ')}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Assignee Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={assignee?.avatar} alt={task.assigneeName || "Unassigned"} />
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {task.assigneeName ? getInitials(task.assigneeName) : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                {task.assigneeName || "Unassigned"}
              </span>
              <span className="text-xs text-muted-foreground">
                {assignee?.role || "No role assigned"}
              </span>
            </div>
          </div>
          
          <Popover open={isEditingAssignee} onOpenChange={setIsEditingAssignee}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <Edit2 className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="assignee-select">Select Assignee</Label>
                  <Select value={newAssigneeName} onValueChange={setNewAssigneeName}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      {assigneeNames.map((name) => (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleAssigneeSave}
                    disabled={!newAssigneeName.trim()}
                    className="flex-1"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAssigneeCancel}
                    className="flex-1"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Due Date */}
        {task.dueDate && (
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className={cn(
              "text-muted-foreground",
              isOverdue && "text-destructive font-medium"
            )}>
              Due: {formatDate(task.dueDate)}
              {isOverdue && " (Overdue)"}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Created: {formatDate(task.createdAt)}</span>
          </div>
          
          <div className="flex gap-2">
            {onEdit && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(task)}
                className="h-8 px-3"
              >
                <Edit2 className="h-3 w-3 mr-1" />
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(task.id)}
                className="h-8 px-3"
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 