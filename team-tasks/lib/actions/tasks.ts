"use server"

import { db } from "../db/index"
import { tasks } from "../db/schema"

export async function getTasks() {
  return db.select().from(tasks)
} 