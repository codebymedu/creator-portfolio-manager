import { createClient } from "@/_lib/supabase";

export const getUser = async () => {
  const supabase = createClient();

  return await supabase.auth.getUser();
};
