import { CreateUserState, LoginUserState } from "@/_actions/auth/types";
import { CreateUserFormSchema, LoginFormSchema } from "@/_actions/auth/schemas";

export const createUser = async (
  prevState: CreateUserState,
  formData: FormData
): Promise<CreateUserState> => {
  const validatedFields = CreateUserFormSchema.safeParse({
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

  return { status: "success" };
};
