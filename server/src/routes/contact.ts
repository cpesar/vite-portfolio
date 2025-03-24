import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
} from "../controllers/contact";

const router = express.Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getContactById);

export default router;
