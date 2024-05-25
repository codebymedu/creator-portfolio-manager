import { Fragment } from "react";
import { DialogPanel, TransitionChild } from "@headlessui/react";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { navigationLinks } from "@/app/_utils/layoutConstants";
import { LayoutSideBarLink } from "@/app/_components/sidebar/sideBarLink";
import { LayoutSideBarMobileDialog } from "@/app/_components/sidebar/mobile/dialog";
import { LayoutSideBarMobileOpenButton } from "@/app/_components/sidebar/mobile/openButton";

export const LayoutSideBarMobile = () => (
  <LayoutSideBarMobileDialog>
    <TransitionChild
      as={Fragment}
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-900/80" />
    </TransitionChild>

    <div className="fixed inset-0 flex">
      <TransitionChild
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
          <LayoutSideBarMobileOpenButton />

          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
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
                      <LayoutSideBarLink key={link.id} id={link.id} />
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <Link
                    href="/settings"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-neutral-200 hover:bg-neutral-700 hover:text-white"
                  >
                    <CiSettings
                      className="h-6 w-6 shrink-0 text-neutral-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings mobile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </TransitionChild>
    </div>
  </LayoutSideBarMobileDialog>
);
