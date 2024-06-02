"use server";

import { EditUserState } from "@/_actions/user/types";
import { EditUserFormSchema } from "@/_actions/user/schemas";

export const editUser = async (
  prevState: EditUserState,
  formData: FormData
): Promise<EditUserState> => {
  const validatedFields = EditUserFormSchema.safeParse({
    password: formData.get("newPassword"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return { status: "success" };
};
