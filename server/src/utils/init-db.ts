import { Pool } from "pg";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

async function initDb() {
  try {
    const schemaSQL = fs.readFileSync(
      path.join(__dirname, "schema.sql"),
      "utf8"
    );

    // Execute the SQL commands
    await pool.query(schemaSQL);

    console.log("Database schema initialized successfully");
    await pool.end();
  } catch (error) {
    console.error("Error initializing database schema:", error);
    await pool.end();
    process.exit(1);
  }
}

initDb();
