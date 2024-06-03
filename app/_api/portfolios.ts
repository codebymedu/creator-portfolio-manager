import { createClient } from "@/_lib/supabase";

export const getPortfolioByUserId = async (userId: string | undefined) => {
  if (!userId) {
    return {
      data: undefined,
      error: "Please provide a userId to this function.",
    };
  }

  const supabase = createClient();

  return await supabase
    .from("portfolios")
    .select("*")
    .eq("user_id", userId)
    .single<{ public_name: string; username: string }>();
};
