"use client";

import { ROLES } from "@/_utils/roles";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { BiChevronDown, BiCheck } from "react-icons/bi";
import { Option } from "@/_types/select";

export const RoleSelect = () => {
  const [query, setQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<Option | null>(null);

  const filteredRoles =
    query === ""
      ? ROLES
      : ROLES.filter((role) => {
          return role.label.toLowerCase().includes(query.toLowerCase());
        });

  // --- RENDER ---

  return (
    <Combobox
      as="div"
      value={selectedRole}
      onChange={(role) => {
        setQuery("");
        setSelectedRole(role);
      }}
      name="role"
    >
      <Label className="block text-sm font-medium leading-6 text-gray-900">
        Role
      </Label>

      <div className="relative mt-2">
        <ComboboxInput
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(role: Option) => role?.label}
        />

        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <BiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredRoles.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredRoles.map((role) => (
              <ComboboxOption
                key={role.value}
                value={role}
                className={({ focus }) =>
                  clsx(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    focus ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ focus, selected }) => (
                  <>
                    <span
                      className={clsx(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {role.label}
                    </span>

                    {selected && (
                      <span
                        className={clsx(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          focus ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <BiCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
};
