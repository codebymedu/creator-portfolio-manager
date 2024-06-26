"use client";

import { loginUser } from "@/_actions/auth";
import { useFormState } from "react-dom";

export const SignInForm = () => {
  // --- STATE ---

  const [formState, dispatchLoginUser] = useFormState(loginUser, {
    status: null,
  });

  // --- RENDER ---

  return (
    <form className="space-y-6" action={dispatchLoginUser}>
      {formState?.errors?.general && (
        <p className="text-sm text-red-600">
          {formState?.errors?.general.join(", ")}
        </p>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>

        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6"
          />

          {formState?.errors?.email && (
            <p className="text-sm text-red-600">
              {formState?.errors?.email.join(", ")}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6"
          />

          {formState?.errors?.password && (
            <p className="text-sm text-red-600">
              {formState?.errors?.password.join(", ")}
            </p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
