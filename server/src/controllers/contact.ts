import { Request, Response } from "express";
import { Contact } from "../models/contact";

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" });
      return;
    }

    // Save to database using your model
    const contact = await Contact.create(name, email, subject, message);

    // Send email notification?

    res
      .status(201)
      .json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all contacts- admin
export const getAllContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await Contact.getAll();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get contact by ID
export const getContactById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const contact = await Contact.getById(id);

    if (!contact) {
      res.status(404).json({ success: false, message: "Contact not found" });
      return;
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
