"use server";

import { EditUserState } from "@/_actions/user/types";
import { EditUserFormSchema } from "@/_actions/user/schemas";
import { createClient } from "@/_lib/supabase";
import { redirect } from "next/navigation";

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

export const deleteMyAccount = async () => {
  const supabase = createClient(process.env.SUPABASE_SERVICE_ROLE_KEY);

  const userId = (await supabase.auth.getUser()).data.user?.id;

  if (!userId) {
    return { status: "error" };
  }

  const { error } = await supabase.auth.admin.deleteUser(userId);

  if (error) {
    return { status: "error" };
  }

  await supabase.auth.signOut();

  redirect("/signin");
};
