import { ROLES } from "@/_utils/roles";
import { SKILLS } from "@/_utils/skills";
import { z } from "zod";

export const EditPortfolioFormSchema = z.object({
  publicName: z
    .string()
    .min(1, "Public name is required")
    .max(100, "Name must be 100 characters or less"),
  role: z.enum(ROLES.map(({ value }) => value) as [string, ...string[]]),
  username: z
    .string()
    .min(1, "Username is required")
    .max(50, "Username must be 50 characters or less"),
  headline: z.string().max(200, "Headline must be 200 characters or less"),
  about: z.string().max(1000, "About must be 1000 characters or less"),
  photo: z.instanceof(File),
  instagramUsername: z.string().url("Must be a valid URL"),
  xUsername: z.string().url("Must be a valid URL"),
  youtubeUsername: z.string().url("Must be a valid URL"),
  tikTokUsername: z.string().url("Must be a valid URL"),
  otherLink: z.string().url("Must be a valid URL"),
  skills: z.array(
    z.enum(SKILLS.map(({ value }) => value) as [string, ...string[]])
  ),
});
