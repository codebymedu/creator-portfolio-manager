import { UserSettingsForm } from "@/(app)/settings/_components/form";
import { createClient } from "@/_lib/supabase/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const supabase = createClient();

  // --- DATA ---

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // --- RENDER ---

  if (error || !user) {
    redirect("/signin");
  }

  return <UserSettingsForm />;
};

export default Page;
