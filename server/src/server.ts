import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import contactRoutes from "./routes/contact";
import { Pool } from "pg";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Check database connection
pool
  .connect()
  .then(() =>
    console.log(
      `Database connected successfully at: ${new Date().toISOString()}`
    )
  )
  .catch((err) => console.error("Database connection error:", err));

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/contact", contactRoutes);

// Serve static files from the React app build directory in production
if (process.env.NODE_ENV === "production") {
  // Serve static files
  app.use(express.static(path.join(__dirname, "../../client/dist")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
