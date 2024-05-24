import { Button } from "@/components/button";
import { HiPlus } from "react-icons/hi2";

export const ProjectsForm = () => {
  // --- RENDER ---

  return (
    <div className="space-y-12 mt-4">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Work Samples/ Projects
        </h2>

        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No projects
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new project.
          </p>

          <div className="mt-6 w-full justify-center flex">
            <Button className="lg:px-6">
              <HiPlus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              New Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
