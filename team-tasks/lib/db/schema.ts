import { pgTable, varchar, text, integer, date, timestamp, pgEnum, serial } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// Enums
export const priorityEnum = pgEnum('priority', ['low', 'medium', 'high'])
export const statusEnum = pgEnum('status', ['todo', 'in-progress', 'completed'])

// Assignees table
export const assignees = pgTable('assignees', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 20 }),
  role: varchar('role', { length: 100 }).notNull(),
  department: varchar('department', { length: 100 }).notNull(),
  avatar: text('avatar'),
  joinDate: date('join_date').notNull(),
  tasksCompleted: integer('tasks_completed').default(0),
  currentTasks: integer('current_tasks').default(0),
  overdueTasks: integer('overdue_tasks').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Tasks table
export const tasks = pgTable('tasks', {
  id: varchar('id', { length: 36 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  priority: priorityEnum('priority').default('medium'),
  status: statusEnum('status').default('todo'),
  assigneeId: varchar('assignee_id', { length: 36 }),
  assigneeName: varchar('assignee_name', { length: 100 }),
  dueDate: date('due_date'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Departments table
export const departments = pgTable('departments', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
})

// Relations
export const assigneesRelations = relations(assignees, ({ many }) => ({
  tasks: many(tasks),
}))

export const tasksRelations = relations(tasks, ({ one }) => ({
  assignee: one(assignees, {
    fields: [tasks.assigneeId],
    references: [assignees.id],
  }),
}))

export const departmentsRelations = relations(departments, ({ many }) => ({
  assignees: many(assignees),
}))

// Types
export type Assignee = typeof assignees.$inferSelect
export type NewAssignee = typeof assignees.$inferInsert
export type Task = typeof tasks.$inferSelect
export type NewTask = typeof tasks.$inferInsert
export type Department = typeof departments.$inferSelect
export type NewDepartment = typeof departments.$inferInsert 