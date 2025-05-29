import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});
