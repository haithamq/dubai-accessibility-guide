"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Users, 
  Plus, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  Search,
  Filter
} from "lucide-react"
import type { Task } from "@/types/task"
import { assignees, getDepartments } from "@/data/assignees"

// Sample tasks for team members
const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Design new landing page",
    description: "Create a modern and responsive landing page design",
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
    description: "Add secure user authentication with JWT tokens",
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
    description: "Create comprehensive API documentation",
    priority: "medium",
    status: "completed",
    assigneeName: "Emily Davis",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-18"),
    dueDate: new Date("2024-01-20"),
  },
]

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")

  const departments = getDepartments()

  const filteredMembers = assignees.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || member.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getMemberTasks = (memberName: string) => {
    return sampleTasks.filter(task => task.assigneeName === memberName)
  }

  const getStatusIcon = (status: Task['status']) => {
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
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage your team members and their assignments
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignees.length}</div>
            <p className="text-xs text-muted-foreground">
              Active team members
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Departments</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departments.length}</div>
            <p className="text-xs text-muted-foreground">
              Different departments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {assignees.reduce((sum, member) => sum + member.tasksCompleted, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Completed tasks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {assignees.reduce((sum, member) => sum + member.currentTasks, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently assigned
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium text-lg">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-sm">{member.role}</CardDescription>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {member.department}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {formatDate(member.joinDate)}</span>
                </div>
              </div>

              {/* Task Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{member.tasksCompleted}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{member.currentTasks}</div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-600">{member.overdueTasks}</div>
                  <div className="text-xs text-muted-foreground">Overdue</div>
                </div>
              </div>

              {/* Recent Tasks */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Recent Tasks</h4>
                <div className="space-y-1">
                  {getMemberTasks(member.name).slice(0, 2).map((task) => (
                    <div key={task.id} className="flex items-center gap-2 p-2 bg-muted/50 rounded text-xs">
                      {getStatusIcon(task.status)}
                      <span className="truncate flex-1">{task.title}</span>
                    </div>
                  ))}
                  {getMemberTasks(member.name).length === 0 && (
                    <div className="text-xs text-muted-foreground p-2">
                      No recent tasks
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Assign Task
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium">No team members found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
} 