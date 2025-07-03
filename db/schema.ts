

import { pgTable, varchar,integer,boolean } from "drizzle-orm/pg-core";



export const waitListUser = pgTable("waitlist", {
  id: varchar("id").primaryKey(),
  email: varchar("email").notNull(),
  type: varchar("type").notNull(),
  datetime: varchar("datetime").notNull(),
});

