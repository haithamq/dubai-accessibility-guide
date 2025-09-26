CREATE TYPE "public"."priority" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('todo', 'in-progress', 'completed');--> statement-breakpoint
CREATE TABLE "assignees" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(20),
	"role" varchar(100) NOT NULL,
	"department" varchar(100) NOT NULL,
	"avatar" text,
	"join_date" date NOT NULL,
	"tasks_completed" integer DEFAULT 0,
	"current_tasks" integer DEFAULT 0,
	"overdue_tasks" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "assignees_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "departments_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"priority" "priority" DEFAULT 'medium',
	"status" "status" DEFAULT 'todo',
	"assignee_id" varchar(36),
	"assignee_name" varchar(100),
	"due_date" date,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
