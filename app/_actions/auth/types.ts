import { z } from "zod";
import { CreateUserFormSchema, LoginFormSchema } from "@/_actions/auth/schemas";

export type CreateUserState = {
  errors?: Partial<
    Record<keyof z.infer<typeof CreateUserFormSchema>, string[]>
  >;
  status: "success" | "error" | null;
};

export type LoginUserState = {
  errors?: Partial<Record<keyof z.infer<typeof LoginFormSchema>, string[]>>;
  status: "success" | "error" | null;
};
