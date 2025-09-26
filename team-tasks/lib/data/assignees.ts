export interface Assignee {
  id: string
  name: string
  email: string
  phone: string
  role: string
  department: string
  avatar: string
  joinDate: Date
  tasksCompleted: number
  currentTasks: number
  overdueTasks: number
}

// Using DiceBear API for consistent, professional avatars
// Each avatar is generated with a specific seed for consistency
export const assignees: Assignee[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    role: "Senior Designer",
    department: "Design",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-01-15"),
    tasksCompleted: 12,
    currentTasks: 3,
    overdueTasks: 0,
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike.chen@company.com",
    phone: "+1 (555) 234-5678",
    role: "Full Stack Developer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-03-20"),
    tasksCompleted: 8,
    currentTasks: 2,
    overdueTasks: 1,
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily.davis@company.com",
    phone: "+1 (555) 345-6789",
    role: "Technical Writer",
    department: "Documentation",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-02-10"),
    tasksCompleted: 15,
    currentTasks: 1,
    overdueTasks: 0,
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    email: "alex.rodriguez@company.com",
    phone: "+1 (555) 456-7890",
    role: "DevOps Engineer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-04-05"),
    tasksCompleted: 6,
    currentTasks: 4,
    overdueTasks: 2,
  },
  {
    id: "5",
    name: "Lisa Wang",
    email: "lisa.wang@company.com",
    phone: "+1 (555) 567-8901",
    role: "Product Manager",
    department: "Product",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-01-30"),
    tasksCompleted: 20,
    currentTasks: 5,
    overdueTasks: 1,
  },
  {
    id: "6",
    name: "David Kim",
    email: "david.kim@company.com",
    phone: "+1 (555) 678-9012",
    role: "QA Engineer",
    department: "Quality Assurance",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-05-12"),
    tasksCompleted: 9,
    currentTasks: 2,
    overdueTasks: 0,
  },
  {
    id: "7",
    name: "Maria Garcia",
    email: "maria.garcia@company.com",
    phone: "+1 (555) 789-0123",
    role: "UX Researcher",
    department: "Design",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-06-18"),
    tasksCompleted: 7,
    currentTasks: 3,
    overdueTasks: 0,
  },
  {
    id: "8",
    name: "James Wilson",
    email: "james.wilson@company.com",
    phone: "+1 (555) 890-1234",
    role: "Frontend Developer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-07-22"),
    tasksCompleted: 11,
    currentTasks: 2,
    overdueTasks: 1,
  },
  {
    id: "9",
    name: "Sophie Brown",
    email: "sophie.brown@company.com",
    phone: "+1 (555) 901-2345",
    role: "Marketing Specialist",
    department: "Marketing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophie&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-08-14"),
    tasksCompleted: 14,
    currentTasks: 4,
    overdueTasks: 0,
  },
  {
    id: "10",
    name: "Ryan Thompson",
    email: "ryan.thompson@company.com",
    phone: "+1 (555) 012-3456",
    role: "Backend Developer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ryan&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    joinDate: new Date("2023-09-05"),
    tasksCompleted: 5,
    currentTasks: 3,
    overdueTasks: 2,
  },
]

// Helper function to get assignee by name
export const getAssigneeByName = (name: string): Assignee | undefined => {
  return assignees.find(assignee => assignee.name === name)
}

// Helper function to get assignee by ID
export const getAssigneeById = (id: string): Assignee | undefined => {
  return assignees.find(assignee => assignee.id === id)
}

// Helper function to get assignees by department
export const getAssigneesByDepartment = (department: string): Assignee[] => {
  return assignees.filter(assignee => assignee.department === department)
}

// Helper function to get all departments
export const getDepartments = (): string[] => {
  return Array.from(new Set(assignees.map(assignee => assignee.department)))
}

// Helper function to get assignee names for form dropdowns
export const getAssigneeNames = (): string[] => {
  return assignees.map(assignee => assignee.name)
} 