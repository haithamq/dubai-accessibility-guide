"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Plus,
  Star
} from "lucide-react"
import Link from "next/link"
import { assignees, getDepartments } from "@/data/assignees"

export default function HomePage() {
  const router = useRouter()

  // Auto-redirect to dashboard after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  // Calculate dynamic stats
  const totalTasksCompleted = assignees.reduce((sum, member) => sum + member.tasksCompleted, 0)
  const totalTeamMembers = assignees.length
  const totalDepartments = getDepartments().length
  const completionRate = Math.round((totalTasksCompleted / (totalTasksCompleted + assignees.reduce((sum, member) => sum + member.currentTasks, 0))) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-5xl font-bold tracking-tight">Team Tasks</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A modern task management platform designed for teams to collaborate, 
            track progress, and achieve their goals together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tasks">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Task
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Redirecting to dashboard in 3 seconds...
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                Create, assign, and track tasks with ease. Set priorities, 
                due dates, and monitor progress in real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Manage your team members, assign roles, and foster 
                collaboration across departments and projects.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Monitor completion rates, identify bottlenecks, and 
                celebrate achievements with detailed analytics.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalTasksCompleted}+</div>
            <div className="text-sm text-muted-foreground">Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalTeamMembers}</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{completionRate}%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalDepartments}</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to get started?</CardTitle>
            <CardDescription>
              Join thousands of teams who are already using Team Tasks to 
              improve their productivity and collaboration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="flex items-center gap-2">
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Meet the Team
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
