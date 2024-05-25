import { navigationLinks } from "@/(app)/_utils/layoutConstants";
import { LayoutSideBarLink } from "@/(app)/_components/sidebar/sideBarLink";
import { CiSettings } from "react-icons/ci";

export const LayoutSideBarDesktop = () => (
  <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-900 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        {/* TODO: Change logo */}
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigationLinks.map((link) => (
                <LayoutSideBarLink id={link.id} key={link.id} />
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-neutral-200 hover:bg-neutral-700 hover:text-white"
            >
              <CiSettings
                className="h-6 w-6 shrink-0 text-neutral-200 group-hover:text-white"
                aria-hidden="true"
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
