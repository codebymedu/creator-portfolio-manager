import { RoleSelect } from "@/_components/roleSelect";
import { ChangeEvent, useState } from "react";
import { HiUser } from "react-icons/hi2";

export const AboutMeForm = () => {
  // --- STATE ---

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // --- CALLBACKS ---

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];

    if (!uploadedFile) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImagePreview(fileReader.result as string);
    };
    fileReader.readAsDataURL(uploadedFile);
  };

  // --- RENDER ---

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          About me
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="publicName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Public name
            </label>

            <div className="mt-2">
              <input
                id="publicName"
                name="publicName"
                type="text"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:max-w-md focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4 md:w-96">
            <RoleSelect />
          </div>

          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  CHANGETHISSSSSSSSSSSSSS.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="headline"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Headline
            </label>

            <div className="mt-2">
              <input
                id="headline"
                name="headline"
                type="text"
                placeholder="I am Jane, a social media marketer based in Berlin"
                autoComplete="headline"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:max-w-md focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full md:w-96">
            <label
              htmlFor="aboutMe"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>

            <div className="mt-2">
              <textarea
                id="aboutMe"
                name="aboutMe"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about yourself.
            </p>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>

            <div className="mt-2 flex items-center gap-x-3">
              <HiUser className="h-12 w-12 text-gray-300" aria-hidden="true" />

              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="profilePicture"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
              >
                Change
              </label>

              {imagePreview && (
                <img
                  src={imagePreview}
                  className="h-12 w-12 rounded-full"
                  alt="Profile preview"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
