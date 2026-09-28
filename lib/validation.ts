import { z } from 'zod';

export const EventRegistrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Name is too long'),
  mobileNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  location: z
    .string()
    .trim()
    .min(2, 'Location is required (e.g. Manjeri, Malappuram)'),
  age: z
    .coerce
    .number()
    .min(10, 'Age must be at least 10')
    .max(100, 'Invalid age')
    .optional()
    .nullable(),
  occupation: z.string().trim().min(1, 'Please select your occupation'),
  organization: z.string().trim().max(150).optional().default(''),
  interests: z
    .array(z.string())
    .min(1, 'Please select at least one area of interest'),
});

export type EventRegistrationInput = z.infer<typeof EventRegistrationSchema>;
