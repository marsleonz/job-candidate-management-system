import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("users", {
  id: integer("id").primaryKey(),
  message: text("message").notNull(),
});
