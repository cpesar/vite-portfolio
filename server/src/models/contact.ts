// import { Pool, QueryResult } from "pg";
import db from "../config/db";

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: Date;
}

export class Contact {
  static async create(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<ContactSubmission> {
    try {
      const result = await db.query(
        "INSERT INTO contact_submissions (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, subject, message]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error saving contact form:", error);
      throw error;
    }
  }

  // Get all contact submissions
  static async getAll(): Promise<ContactSubmission[]> {
    try {
      const result = await db.query(
        "SELECT * FROM contact_submissions ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (error) {
      console.error("Error getting contact submissions:", error);
      throw error;
    }
  }

  // Get a single contact submission by ID
  static async getById(id: number): Promise<ContactSubmission | null> {
    try {
      const result = await db.query(
        "SELECT * FROM contact_submissions WHERE id = $1",
        [id]
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error("Error getting contact submission:", error);
      throw error;
    }
  }
}
