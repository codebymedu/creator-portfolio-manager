import { addProject } from "@/_actions/project";
import { Button } from "@/_components/button";
import { useFormState } from "react-dom";
import { HiPlus } from "react-icons/hi2";

export const AddNewProjectForm = () => {
  // --- STATE ---

  const [formState, dispatchAddProject] = useFormState(addProject, {
    status: null,
  });

  // --- RENDER ---

  return (
    <form action={dispatchAddProject} className="space-y-4">
      <div>
        <label
          htmlFor="photo"
          className="block text-sm font-medium text-gray-700"
        >
          Photo
        </label>

        <input
          type="file"
          id="photo"
          name="photo"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm"
          accept="image/*"
        />

        {formState?.errors?.photo && (
          <p className="text-sm text-red-600">
            {formState?.errors?.photo.join(", ")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="moreDetailsLink"
          className="block text-sm font-medium text-gray-700"
        >
          More Details Link (Optional)
        </label>

        <input
          type="text"
          id="moreDetailsLink"
          name="moreDetailsLink"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm"
        />

        {formState?.errors?.moreDetailsLink && (
          <p className="text-sm text-red-600">
            {formState?.errors?.moreDetailsLink.join(", ")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>

        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm"
        />

        {formState?.errors?.title && (
          <p className="text-sm text-red-600">
            {formState?.errors?.title.join(", ")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="shortDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Short Description
        </label>

        <input
          type="text"
          id="shortDescription"
          name="shortDescription"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm"
        />

        {formState?.errors?.shortDescription && (
          <p className="text-sm text-red-600">
            {formState?.errors?.shortDescription.join(", ")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="longDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Long Description
        </label>

        <textarea
          id="longDescription"
          name="longDescription"
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm"
        />

        {formState?.errors?.longDescription && (
          <p className="text-sm text-red-600">
            {formState?.errors?.longDescription.join(", ")}
          </p>
        )}
      </div>

      <Button type="submit" className="lg:px-6 inline-flex items-center">
        <HiPlus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
        New Project
      </Button>
    </form>
  );
};
