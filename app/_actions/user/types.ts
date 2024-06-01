import { z } from "zod";
import { EditUserFormSchema } from "@/_actions/user/schemas";

export type EditUserState = {
  errors?: Partial<Record<keyof z.infer<typeof EditUserFormSchema>, string[]>>;
  status: "success" | "error" | null;
};
