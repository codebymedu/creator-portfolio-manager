import { navigationLinks } from "@/(landing)/_utils/layoutConstants";
import { DialogPanel } from "@headlessui/react";
import { HeaderProvider } from "@/(landing)/_components/header/_utils/headerContext";
import { HeaderDialogMobile } from "@/(landing)/_components/header/_components/dialogMobile";
import { HeaderOpenDialogButton } from "@/(landing)/_components/header/_components/openDialogButton";
import { HeaderCloseDialogButton } from "@/(landing)/_components/header/_components/closeDialogButton";
import Link from "next/link";
import { HeaderLinkMobile } from "@/(landing)/_components/header/_components/linkMobile";

export const Header = () => (
  <HeaderProvider>
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <HeaderOpenDialogButton />
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <HeaderDialogMobile>
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>

            <HeaderCloseDialogButton />
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationLinks.map((link) => (
                  <HeaderLinkMobile
                    key={link.name}
                    href={link.href}
                    name={link.name}
                  />
                ))}
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </HeaderDialogMobile>
    </header>
  </HeaderProvider>
);
