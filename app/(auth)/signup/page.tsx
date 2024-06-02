import Link from "next/link";
import { SignUpForm } from "@/(auth)/signup/_components/form";
import { createClient } from "@/_lib/supabase/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const supabase = createClient();

  // --- DATA ---

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // --- RENDER ---

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=neutral&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a Great Portfolio In Minutes
          </h2>

          <p className="mt-2 text-center text-sm text-gray-500">
            Show your work and get hired today
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignUpForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              href="/signin"
              className="font-semibold leading-6 text-neutral-900 hover:text-neutral-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
