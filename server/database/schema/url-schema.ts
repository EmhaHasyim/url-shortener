import { sql } from "drizzle-orm";
import { sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const urls = sqliteTable('urls', {
    id: text().unique().primaryKey().$defaultFn(() => Bun.randomUUIDv7()),
    shortUrl: text('short_url').unique().notNull(),
    originalUrl: text('original_url').notNull(),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
}, (table) => [
    uniqueIndex("shortUrlIdx").on(table.shortUrl)
]
)

const urlInsertSchema = createSelectSchema(urls, {
    shortUrl: (schema) => schema.min(3).max(20),
    originalUrl: (schema) => schema.url()
}).omit({ id: true, createdAt: true })

export { urlInsertSchema, urls }

export type urlInsertType = z.infer<typeof urlInsertSchema>;