"use server";

import { AddProjectState } from "@/_actions/project/types";
import { AddProjectFormSchema } from "@/_actions/project/schemas";

export const addProject = async (
  prevState: AddProjectState,
  formData: FormData
): Promise<AddProjectState> => {
  console.log({ formData });
  const validatedFields = AddProjectFormSchema.safeParse({
    photo: formData.get("photo"),
    moreDetailsLink: formData.get("moreDetailsLink"),
    title: formData.get("title"),
    shortDescription: formData.get("shortDescription"),
    longDescription: formData.get("longDescription"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // TODO: Add project
  // TODO: Revalidate page

  return { status: "success" };
};

export const deleteProject = (projectId: string) => {
  // TODO: Delete Project

  console.log("Delete Project");
};
