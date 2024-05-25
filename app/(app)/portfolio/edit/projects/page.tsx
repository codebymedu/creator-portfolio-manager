import { Title } from "@/_components/title";
import { AddNewProjectDialogOpenButton } from "@/(app)/portfolio/edit/projects/_components/addNewProject/openButton";
import { AddNewProjectDialog } from "@/(app)/portfolio/edit/projects/_components/addNewProject/dialog";
import { ProjectCard } from "@/_components/projectCard";
import { Button } from "@/_components/button";
import { HiXMark } from "react-icons/hi2";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="">
          <Button className="w-full bg-transparent text-red-600 hover:bg-red-50 gap-2">
            <HiXMark className="text-2xl" /> Delete
          </Button>

          <ProjectCard
            description="testttt"
            imageSrc="/worksample.jpg"
            title="test"
          />
        </div>

        <div className="">
          <Button className="w-full bg-transparent text-red-600 hover:bg-red-50 gap-2">
            <HiXMark className="text-2xl" /> Delete
          </Button>

          <ProjectCard
            description="testttt"
            imageSrc="/worksample.jpg"
            title="test"
          />
        </div>

        <div className="">
          <Button className="w-full bg-transparent text-red-600 hover:bg-red-50 gap-2">
            <HiXMark className="text-2xl" /> Delete
          </Button>

          <ProjectCard
            description="testttt"
            imageSrc="/worksample.jpg"
            title="test"
          />
        </div>
      </div>
    </div>
  </>
);

export default Page;
