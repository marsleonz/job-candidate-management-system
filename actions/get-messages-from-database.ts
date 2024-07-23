"use server";

import { db } from "@/app/db/db";
import { messages } from "@/app/db/schema";

export async function getMessagesFromDatabase() {
  const response = await db.select().from(messages);
  return response;
}
