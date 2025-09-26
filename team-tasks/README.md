# Team Tasks Application

A modern task management application built with Next.js 15, TypeScript, and MySQL database.

## Features

- 🎯 Task management with priority levels and status tracking
- 👥 Team member management with departments and roles
- 📊 Dashboard with real-time statistics
- 🌙 Dark/Light mode support
- 📱 Responsive design
- 🔍 Search and filtering capabilities
- 🎨 Modern UI with shadcn/ui components

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: MySQL 8.0
- **Database Management**: phpMyAdmin
- **Containerization**: Docker & Docker Compose
- **Theme**: next-themes

## Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ and npm

## Quick Start

### 1. Clone and Setup

```bash
git clone <repository-url>
cd team-tasks
npm install
```

### 2. Start MySQL Database

```bash
# Start MySQL and phpMyAdmin containers
docker-compose up -d

# Verify containers are running
docker-compose ps
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=teamuser
DB_PASSWORD=teampassword
DB_NAME=team_tasks

# Next.js Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Application

```bash
# Development mode
npm run dev

# Or build and start production
npm run build
npm start
```

### 5. Access the Application

- **Application**: http://localhost:3000
- **phpMyAdmin**: http://localhost:8080
  - Username: `teamuser`
  - Password: `teampassword`

## Database Setup

The database is automatically initialized with:

- **Tables**: `assignees`, `tasks`, `departments`
- **Sample Data**: 10 team members and 10 sample tasks
- **Indexes**: Optimized for performance

### Database Schema

#### Assignees Table
- `id` (VARCHAR(36)) - Primary key
- `name` (VARCHAR(100)) - Full name
- `email` (VARCHAR(255)) - Email address (unique)
- `phone` (VARCHAR(20)) - Phone number
- `role` (VARCHAR(100)) - Job role
- `department` (VARCHAR(100)) - Department
- `avatar` (TEXT) - Avatar URL
- `join_date` (DATE) - Join date
- `tasks_completed` (INT) - Completed tasks count
- `current_tasks` (INT) - Current tasks count
- `overdue_tasks` (INT) - Overdue tasks count

#### Tasks Table
- `id` (VARCHAR(36)) - Primary key
- `title` (VARCHAR(255)) - Task title
- `description` (TEXT) - Task description
- `priority` (ENUM) - low/medium/high
- `status` (ENUM) - todo/in-progress/completed
- `assignee_id` (VARCHAR(36)) - Foreign key to assignees
- `assignee_name` (VARCHAR(100)) - Assignee name (denormalized)
- `due_date` (DATE) - Due date
- `created_at` (TIMESTAMP) - Creation timestamp
- `updated_at` (TIMESTAMP) - Last update timestamp

## API Endpoints

### Assignees
- `GET /api/assignees` - Get all assignees
- `POST /api/assignees` - Create new assignee

### Tasks
- `GET /api/tasks` - Get all tasks (with filtering and pagination)
- `POST /api/tasks` - Create new task

## Docker Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Reset database (removes all data)
docker-compose down -v
docker-compose up -d

# Access MySQL directly
docker exec -it team-tasks-mysql mysql -u teamuser -p team_tasks
```

## Development

### Database Connection Test

The application includes a database connection test. You can test the connection by visiting the dashboard page, which will attempt to fetch data from the database.

### Adding New Features

1. **Database Changes**: Update the SQL schema in `docker/mysql/init/01-create-tables.sql`
2. **API Routes**: Add new routes in `src/app/api/`
3. **Types**: Update types in `src/types/database.ts`
4. **Services**: Add database services in `src/lib/`

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_HOST` | Database host | localhost |
| `DB_PORT` | Database port | 3306 |
| `DB_USER` | Database username | teamuser |
| `DB_PASSWORD` | Database password | teampassword |
| `DB_NAME` | Database name | team_tasks |

## Troubleshooting

### Database Connection Issues

1. Ensure Docker containers are running:
   ```bash
   docker-compose ps
   ```

2. Check container logs:
   ```bash
   docker-compose logs mysql
   ```

3. Verify database is accessible:
   ```bash
   docker exec -it team-tasks-mysql mysql -u teamuser -p team_tasks
   ```

### Application Issues

1. Check if environment variables are set correctly
2. Verify database connection in browser console
3. Check application logs for errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
