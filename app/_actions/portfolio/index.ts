"use server";

import { EditPortfolioState } from "@/_actions/portfolio/types";

export const editPortfolio = async (
  prevState: EditPortfolioState,
  formData: FormData
): Promise<EditPortfolioState> => {
  console.log("formData:", formData);

  // TODO: Add authorization so you can edit only your portfolio

  return { status: "success" };
};
