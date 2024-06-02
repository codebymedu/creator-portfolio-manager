import { Title } from "@/_components/title";
import { EditPortfolioForm } from "@/(app)/portfolio/edit/_components/form";
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

  // --- RENDER ---

  return (
    <div className="">
      <Title className="mb-2">Customize your portfolio</Title>

      <p className="mt-1 text-sm leading-6 text-gray-600 mb-8">
        This information will be displayed publicly so be careful what you
        share.
      </p>

      <EditPortfolioForm />
    </div>
  );
};

export default Page;
