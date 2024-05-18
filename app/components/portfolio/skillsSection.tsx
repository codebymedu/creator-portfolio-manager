import { Card } from "@/app/components/card";
import { MdOutlineTerminal } from "react-icons/md";

export const SkillsSection = () => (
  <div
    id="skills"
    className="p-12 flex justify-between flex-col h-full bg-neutral-100 w-full rounded-xl"
  >
    <h1 className="text-neutral-900 text-4xl font-bold mb-8">
      Here Is What I Do Best
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-8">
      {SKILLS.map((skill) => (
        <Card
          className="h-18 flex gap-5 hover:scale-105 text-lg lg:text-base"
          key={skill.id}
        >
          <MdOutlineTerminal size={25} />

          {skill.title}
        </Card>
      ))}
    </div>
  </div>
);

type Skill = { id: number; title: string };

// Should come from backend and ask chatgpt to generate 100 skill ideas so you can hardcode them (helps with search later)
const SKILLS: Skill[] = [
  {
    id: 1,
    title: "Create Websites",
  },
  {
    id: 2,
    title: "Improve SEO",
  },
  {
    id: 3,
    title: "Improve Responsivity",
  },
  {
    id: 4,
    title: "Create Designs",
  },
  {
    id: 5,
    title: "Create Websites",
  },
  {
    id: 6,
    title: "Create Websites",
  },
];
