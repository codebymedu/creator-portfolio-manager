import { Title } from "@/_components/title";
import { AddNewProjectDialogOpenButton } from "@/(app)/portfolio/edit/projects/_components/addNewProject/openButton";
import { AddNewProjectDialog } from "@/(app)/portfolio/edit/projects/_components/addNewProject/dialog";

const Page = () => (
  <>
    <Title className="mb-2">Add your projects</Title>
    <p className="mt-1 text-sm leading-6 text-gray-600 mb-8">
      Show your audience what you've created so far :)
    </p>
    <div className="space-y-12 mt-4">
      <div className="mt-6 ">
        <AddNewProjectDialogOpenButton />
      </div>

      <AddNewProjectDialog />
    </div>
  </>
);

export default Page;
