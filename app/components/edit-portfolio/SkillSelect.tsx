"use client";

import { SKILLS } from "@/app/utils.ts/skills";
import { ChangeEventHandler, useCallback, useState } from "react";

export const SkillSelect = () => {
  // --- STATE ---

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [displayedSkills, setDisplayedSkills] = useState<typeof SKILLS>(SKILLS);

  // --- CALLBACKS ---

  const handleToggleSkill: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value: clickedSkill } }) =>
      setSelectedSkills((selectedSkills) =>
        !selectedSkills.includes(clickedSkill)
          ? [...selectedSkills, clickedSkill]
          : selectedSkills.filter((skill) => skill !== clickedSkill)
      ),
    []
  );

  // --- RENDER ---

  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Search for skills
      </label>

      <div className="mt-2 mb-4">
        <input
          onChange={({ target: { value: searchQuery } }) =>
            setDisplayedSkills(
              SKILLS.filter(({ label }) =>
                label.toLowerCase().includes(searchQuery.toLocaleLowerCase())
              )
            )
          }
          id="name"
          name="name"
          type="text"
          placeholder="Start typing..."
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:max-w-md focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div className="overflow-x-hidden overflow-y-scroll h-64 w-80 mb-4">
        {displayedSkills.map((skill) => (
          <div key={skill.value} className="flex gap-4 my-2 mx-2 items-center">
            <input
              type="checkbox"
              name="skill"
              id={skill.value}
              value={skill.value}
              className="h-4 w-4 rounded border-gray-300 text-neutral-600 focus:ring-neutral-600"
              onChange={handleToggleSkill}
            />

            <label htmlFor={skill.value}>{skill.label}</label>
          </div>
        ))}
      </div>

      <span className="flex flex-wrap">
        Selected:
        {selectedSkills.map((selectedSkill) => (
          <span className="bg-neutral-100 p-2 m-2">
            {SKILLS.find((skill) => skill.value === selectedSkill)?.label}
          </span>
        ))}
      </span>
    </div>
  );
};
