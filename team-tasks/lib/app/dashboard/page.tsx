"use client"

import { getTasks } from "../../actions/tasks"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback } from "../../components/ui/avatar"
import { Calendar, CheckCircle, Clock, AlertTriangle, Plus } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const tasks: any[] = await getTasks()

  const stats = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter((t: any) => t.status === 'completed').length,
    inProgressTasks: tasks.filter((t: any) => t.status === 'in-progress').length,
    overdueTasks: tasks.filter((t: any) => t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'completed').length,
    completionRate: tasks.length > 0 ? Math.round((tasks.filter((t: any) => t.status === 'completed').length / tasks.length) * 100) : 0,
  }

  const recentTasks = tasks.slice(0, 5)

  const getInitials = (name: string) => {
    return name
      ? name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2)
      : ''
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'in-progress': return <Clock className="h-4 w-4 text-blue-600" />
      case 'todo': return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      default: return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here&apos;s an overview of your team&apos;s progress.
          </p>
        </div>
        <Link href="/tasks">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Task
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTasks}</div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedTasks}</div>
            <p className="text-xs text-muted-foreground">
              {stats.completionRate}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgressTasks}</div>
            <p className="text-xs text-muted-foreground">
              Currently being worked on
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.overdueTasks}</div>
            <p className="text-xs text-muted-foreground">
              Past due date
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tasks */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {recentTasks.map((task) => (
                  <li key={task.id} className="mb-4">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-semibold">{task.title}</div>
                        <div className="text-sm text-muted-foreground">{task.description}</div>
                        <div className="flex gap-2 mt-1">
                          <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                          <span className="text-xs">Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarFallback>{getInitials(task.assigneeName || "")}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{task.assigneeName}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* You can add more columns or Kanban-style grouping here if needed */}
      </div>
    </div>
  )
} 