import { Pool } from "pg";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function initDb() {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
  });
  try {
    const schemaPath = path.join(__dirname, "../db/schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");

    // Execute the SQL commands
    await pool.query(schema);

    console.log("Database schema initialized successfully");
    await pool.end();
  } catch (error) {
    console.error("Error initializing database schema:", error);
    await pool.end();
    process.exit(1);
  }
}

initDb();
