import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { candidates } from "@/app/db/schema";

export const CandidateSchema = createInsertSchema(candidates, {
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    })
    .trim()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must not exceed 50 characters" }),

  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    })
    .trim()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must not exceed 50 characters" }),

  phoneNumber: z
    .string({
      invalid_type_error: "Phone number must be a string",
    })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(15, { message: "Phone number must not exceed 15 characters" })
    .optional(),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .trim()
    .email({ message: "Invalid email address" }),

  callTimeInterval: z
    .string({
      invalid_type_error: "Call time interval must be a string",
    })
    .trim()
    .max(100, { message: "Call time interval must not exceed 100 characters" })
    .optional(),

  linkedinUrl: z
    .string({
      invalid_type_error: "LinkedIn URL must be a string",
    })
    .trim()
    .url({ message: "Invalid LinkedIn URL" })
    .max(200, { message: "LinkedIn URL must not exceed 200 characters" })
    .optional(),

  githubUrl: z
    .string({
      invalid_type_error: "GitHub URL must be a string",
    })
    .trim()
    .url({ message: "Invalid GitHub URL" })
    .max(200, { message: "GitHub URL must not exceed 200 characters" })
    .optional(),

  comment: z
    .string({
      invalid_type_error: "Comment must be a string",
    })
    .trim()
    .max(1000, { message: "Comment must not exceed 1000 characters" })
    .optional(),
}).omit({ id: true, createdAt: true, updatedAt: true });
