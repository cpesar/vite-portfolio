import express from "express";
import { getAllContacts } from "../controllers/contact";
import { adminAuth } from "../middleware/authMiddleware";

const router = express.Router();

// protected admin routes
router.get("/contacts", getAllContacts);

export default router;
