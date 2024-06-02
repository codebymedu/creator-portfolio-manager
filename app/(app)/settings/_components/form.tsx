"use client";

import { editUser } from "@/_actions/user";
import { Button } from "@/_components/button";
import { useFormState } from "react-dom";

export const UserSettingsForm = () => {
  // --- STATE ---

  const [formState, dispatchEditUser] = useFormState(editUser, {
    status: null,
  });

  // --- RENDER ---

  return (
    <>
      <form
        action={dispatchEditUser}
        className="border-b border-gray-900/10 pb-12"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
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
                disabled
                value="myemail@gmail.com"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="**********"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {formState?.errors?.password && (
                <p className="text-sm text-red-600">
                  {formState?.errors?.password.join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex mt-12 md:mt-5 gap-6 flex-col md:flex-row">
          <Button className="text-white bg-red-500 hover:bg-red-600 px-8 lg:px-8">
            Delete my account
          </Button>

          <Button type="submit" className="px-8 lg:px-8">
            Save Change
          </Button>
        </div>
      </form>
    </>
  );
};
