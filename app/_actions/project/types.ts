import { z } from "zod";
import { AddProjectFormSchema } from "@/_actions/project/schemas";

export type AddProjectState = {
  errors?: Partial<
    Record<keyof z.infer<typeof AddProjectFormSchema>, string[]>
  >;
  status: "success" | "error" | null;
};
