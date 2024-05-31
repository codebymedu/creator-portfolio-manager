type SocialMediaAccountsFormProps = {
  validationErrors?: {
    instagramUsername?: string[];
    xUsername?: string[];
    youtubeUsername?: string[];
    tikTokUsername?: string[];
    otherLink?: string[];
  };
};

export const SocialMediaAccountsForm = ({
  validationErrors,
}: SocialMediaAccountsFormProps) => {
  // --- RENDER ---

  return (
    <div className="space-y-12 mt-4">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Social Media
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="instagramUsername"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Instagram
            </label>

            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  instagram.com/
                </span>
                <input
                  type="text"
                  name="instagramUsername"
                  id="instagramUsername"
                  autoComplete="instagram"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="xUsername"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              X (Twitter)
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  x.com/
                </span>
                <input
                  type="text"
                  name="xUsername"
                  id="xUsername"
                  autoComplete="x"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="youtubeUsername"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Youtube
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  youtube.com/@
                </span>
                <input
                  type="text"
                  name="youtubeUsername"
                  id="youtubeUsername"
                  autoComplete="youtube"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="tikTokUsername"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              TikTok
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  tiktok.com/@
                </span>
                <input
                  type="text"
                  name="tikTokUsername"
                  id="tikTokUsername"
                  autoComplete="tikTok"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 md:w-96">
            <label
              htmlFor="otherLink"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Other
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-600 sm:max-w-md">
                <input
                  type="text"
                  name="otherLink"
                  id="otherLink"
                  autoComplete="link"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="https://janesmith.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
