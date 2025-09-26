import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './db/schema'

// Database configuration
const connectionString = process.env.DB_URL || 'postgresql://teamuser:teampassword@localhost:5432/team_tasks'

// Create postgres client
const client = postgres(connectionString, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
})

// Create drizzle instance
export const db = drizzle(client, { schema })

// Test database connection
export async function testConnection() {
  try {
    await client`SELECT 1`
    console.log('✅ Database connected successfully!')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

// Close database connection
export async function closeConnection() {
  try {
    await client.end()
    console.log('Database connection closed')
  } catch (error) {
    console.error('Error closing database connection:', error)
  }
}

export default db 