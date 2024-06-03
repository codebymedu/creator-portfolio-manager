"use client";

import { Button } from "@/_components/button";

export const UserSettingsDeleteAccount = () => {
  // --- RENDER ---

  return (
    <div className=" border-b border-gray-900/10 py-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 mb-8">
        Delete my account
      </h2>

      <p className="text-red-500 mb-4">
        We will delete your account and everything related to it. This action
        cannot be reverted!
      </p>

      <Button className="text-white bg-red-500 hover:bg-red-600 px-8 lg:px-8">
        Delete my account
      </Button>
    </div>
  );
};
