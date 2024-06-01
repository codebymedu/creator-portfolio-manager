"use server";

import { EditPortfolioState } from "@/_actions/portfolio/types";
import { EditPortfolioFormSchema } from "@/_actions/portfolio/schemas";

export const editPortfolio = async (
  prevState: EditPortfolioState,
  formData: FormData
): Promise<EditPortfolioState> => {
  const validatedFields = EditPortfolioFormSchema.safeParse({
    publicName: formData.get("publicName") as string,
    role: formData.get("role") as string,
    username: formData.get("username") as string,
    headline: formData.get("headline") as string,
    about: formData.get("about") as string,
    photo: formData.get("photo") as File,
    instagramUsername: formData.get("instagramUsername") as string,
    xUsername: formData.get("xUsername") as string,
    youtubeUsername: formData.get("youtubeUsername") as string,
    tikTokUsername: formData.get("tikTokUsername") as string,
    otherLink: formData.get("otherLink") as string,
    skills: formData.getAll("skill") as string[],
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // TODO: Add authorization so you can edit only your portfolio
  // TODO: Edit portfolio
  // TODO: Revalidate page

  return { status: "success" };
};
