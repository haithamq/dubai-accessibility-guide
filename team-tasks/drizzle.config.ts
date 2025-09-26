import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL || 'postgresql://teamuser:teampassword@localhost:5432/team_tasks',
  },
  verbose: true,
  strict: true,
}) 