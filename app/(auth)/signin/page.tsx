import Link from "next/link";
import { SignInForm } from "@/(auth)/signin/_components/form";
import { redirect } from "next/navigation";
import { createClient } from "@/_lib/supabase/server";

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
            Login to your great portfolio
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignInForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-neutral-900 hover:text-neutral-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
