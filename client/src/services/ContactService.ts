import { message } from "antd";

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

interface ApiError extends Error {
  status?: number;
  code?: string;
}

const API_URL = "http://localhost:5001/api";

// fetch all contact submissions
export const getAllContacts = async (): Promise<ContactSubmission[]> => {
  try {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      throw new Error("Authentication required");
    }

    const response = await fetch(`${API_URL}/admin/contacts`, {
      headers: {
        "x-auth-token": token,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch contacts");
    }
    return await response.json();
  } catch (error: unknown) {
    const apiError = error as ApiError;
    message.error(apiError.message || "Failed to fetch contacts");
    throw error;
  }
};

// submit a new contact form
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit form");
    }

    return await response.json();
  } catch (error: unknown) {
    const apiError = error as ApiError;

    message.error(apiError.message || "Failed to submit form");
    throw error;
  }
};
