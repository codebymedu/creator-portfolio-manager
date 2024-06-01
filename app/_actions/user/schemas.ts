import { z } from "zod";

export const EditUserFormSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(124, "Password cannot be longer than 124 characters."),
});
