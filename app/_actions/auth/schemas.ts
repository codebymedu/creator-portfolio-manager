import { z } from "zod";

export const CreateUserFormSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters long.")
    .max(64, "Username must be shorter than 64 characters."),
  email: z.string().email("Please provide a valid email."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long,")
    .max(124, "Password cannot be longer than 124 characters."),
});
