import { z } from "zod";
import { CreateUserFormSchema } from "@/_actions/auth/schemas";

export type CreateUserState = {
  errors?: Partial<
    Record<keyof z.infer<typeof CreateUserFormSchema>, string[]>
  >;
  status: "success" | "error" | null;
};
