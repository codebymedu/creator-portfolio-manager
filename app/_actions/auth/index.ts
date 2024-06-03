"use server";

import { CreateUserState, LoginUserState } from "@/_actions/auth/types";
import { CreateUserFormSchema, LoginFormSchema } from "@/_actions/auth/schemas";
import { createClient } from "@/_lib/supabase/server";
import { redirect } from "next/navigation";

export const createUser = async (
  prevState: CreateUserState,
  formData: FormData
): Promise<CreateUserState> => {
  const validatedFields = CreateUserFormSchema.safeParse({
    publicName: formData.get("publicName"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();

  const { data: usernameSearchData } = await supabase
    .from("portfolios")
    .select("username")
    .eq("username", validatedFields.data.username);

  if ((usernameSearchData || []).length > 0) {
    return {
      status: "error",
      errors: { username: ["This username is already registered."] },
    };
  }

  const { error } = await supabase.auth.signUp({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    options: {
      data: {
        username: validatedFields.data.username,
        public_name: validatedFields.data.publicName,
        is_portfolio_created: false,
      },
    },
  });

  if (error) {
    if (error.message === "User already registered") {
      return {
        status: "error",
        errors: { email: ["This email is already registered."] },
      };
    }

    return {
      status: "error",
      errors: {
        username: ["There has been an unknown error. Please try again."],
      },
    };
  }

  return { status: "success" };
};

export const loginUser = async (
  prevState: LoginUserState,
  formData: FormData
): Promise<LoginUserState> => {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();

  const { error: authenticationError } = await supabase.auth.signInWithPassword(
    validatedFields.data
  );

  if (authenticationError) {
    if (authenticationError.message === "Email not confirmed") {
      return {
        status: "error",
        errors: { general: ["Please confirm your email!"] },
      };
    }

    return {
      status: "error",
      errors: { general: ["The credentials are not correct!"] },
    };
  }

  redirect("/dashboard");
};

export const logoutUser = async () => {
  const supabase = createClient();

  await supabase.auth.signOut();

  redirect("/signin");
};
