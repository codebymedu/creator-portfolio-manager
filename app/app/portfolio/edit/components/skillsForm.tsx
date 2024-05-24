import { SkillSelect } from "@/components/editPortfolio/SkillSelect";

export const SkillsForm = () => (
  <div className="space-y-12 mt-4">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Skills
      </h2>

      <SkillSelect />
    </div>
  </div>
);
