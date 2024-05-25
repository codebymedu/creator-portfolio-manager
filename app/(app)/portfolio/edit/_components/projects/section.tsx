import { NewProjectDialog } from "@/(app)/portfolio/edit/_components/projects/dialog/dialog";
import { NewProjectDialogOpenButton } from "@/(app)/portfolio/edit/_components/projects/dialog/openButton";

export const ProjectsSection = () => (
  <div className="space-y-12 mt-4">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Work Samples/ Projects
      </h2>

      <div className="mt-6 ">
        <NewProjectDialogOpenButton />
      </div>
    </div>

    <NewProjectDialog />
  </div>
);
