import { ROLES } from "@/_utils/roles";
import { SKILLS } from "@/_utils/skills";
import { z } from "zod";

const photoMaxSize = 5 * 1024 * 1024; // 5 MB
const photoAcceptedTypes = ["image/jpeg", "image/png"];

export const EditPortfolioFormSchema = z.object({
  publicName: z
    .string()
    .min(1, "Public name is required")
    .max(100, "Name must be 100 characters or less"),
  role: z.enum(ROLES.map(({ value }) => value) as [string, ...string[]], {
    message: "Role is required",
  }),
  username: z
    .string()
    .min(1, "Username is required")
    .max(50, "Username must be 50 characters or less"),
  headline: z
    .string()
    .min(6, "Headline must be 6 characters or more")
    .max(200, "Headline must be 200 characters or less"),
  about: z
    .string({ message: "Please write a bit about yourself." })
    .max(1000, "About must be 1000 characters or less"),
  photo: z
    .instanceof(File)
    .refine(
      (file) =>
        !file ||
        (file.size <= photoMaxSize && photoAcceptedTypes.includes(file.type)),
      {
        message: `Photo must be a valid file type (${photoAcceptedTypes.join(
          ", "
        )}) and less than ${photoMaxSize / (1024 * 1024)} MB`,
      }
    )
    .nullable()
    .optional(),
  instagramUsername: z.string().optional(),
  xUsername: z.string().optional(),
  youtubeUsername: z.string().optional(),
  tikTokUsername: z.string().optional(),
  otherLink: z.string().url("Must be a valid URL").optional(),
  skills: z
    .array(z.enum(SKILLS.map(({ value }) => value) as [string, ...string[]]))
    .refine((skills) => skills.length >= 2, {
      message: "Please select at least 2 skills",
    }),
});
