import { z } from "zod";

export const AddProjectFormSchema = z.object({
  photo: z.instanceof(File, {
    message: "Photo is required and must be an image",
  }),
  moreDetailsLink: z.string().url().optional(),
  title: z.string().min(3, "Title is required"),
  shortDescription: z
    .string()
    .min(3, "Short description is required")
    .max(150, "Short description should be less than 150 characters"),
  longDescription: z
    .string()
    .min(1, "Long description is required")
    .max(2500, "Long description cannot be more than 2500 characters."),
});
