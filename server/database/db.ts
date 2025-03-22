import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database(process.env.DB_FILE_NAME || 'database.sqlite');
export const db = drizzle(sqlite);