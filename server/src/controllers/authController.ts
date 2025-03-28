import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const JWT_SECRET = process.env.JWT_SECRET || "";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Check if username and password match credentials
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    // Create salted password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, salt);

    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    // Sign JWT token
    const secret = JWT_SECRET;
    const payload = {
      user: {
        username: username,
      },
      isAdmin: true,
    };
    jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.json({ success: true, token });
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
