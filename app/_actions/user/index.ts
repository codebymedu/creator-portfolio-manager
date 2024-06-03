"use server";

import { EditUserState } from "@/_actions/user/types";
import { EditUserFormSchema } from "@/_actions/user/schemas";
import { createClient } from "@/_lib/supabase";

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

  const supabase = createClient();

  const { error } = await supabase.auth.updateUser(validatedFields.data);

  if (error) {
    return {
      status: "error",
      errors: { password: [error.message] },
    };
  }

  return { status: "success" };
};
