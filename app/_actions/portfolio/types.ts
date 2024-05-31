import { z } from "zod";
import { EditPortfolioFormSchema } from "@/_actions/portfolio/schemas";

export type EditPortfolioState = {
  errors?: Partial<
    Record<keyof z.infer<typeof EditPortfolioFormSchema>, string[]>
  >;
  status: "success" | "error" | null;
};
