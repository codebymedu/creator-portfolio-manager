import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown, HiUserCircle } from "react-icons/hi2";
import { LayoutHeaderCloseSideBarButton } from "@/(app)/_components/header/closeSideBarButton";
import { HeaderNavigationLinks } from "@/(app)/_components/header/navigationLinks";
import { getUser } from "@/_api/user";
import { getPortfolioByUserId } from "@/_api/portfolios";

export const LayoutHeader = async () => {
  // --- DATA ---

  const {
    data: { user },
  } = await getUser();

  const { data: portfolio } = await getPortfolioByUserId(user?.id);

  // --- RENDER ---

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <LayoutHeaderCloseSideBarButton />

      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center justify-end gap-x-4 lg:gap-x-6 w-full">
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>

              <HiUserCircle className="h-10 w-10 rounded-full bg-gray-50 text-neutral-700" />

              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                >
                  {portfolio?.public_name || user?.email}
                </span>

                <HiChevronDown
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </MenuButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <HeaderNavigationLinks />
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
