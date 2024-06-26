import {
  navigationLinks,
  navigationSocialLinks,
} from "@/(landing)/_utils/layoutConstants";

export const Footer = () => (
  <footer className="bg-white">
    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        {navigationLinks.map((link) => (
          <div key={link.name} className="pb-6">
            <a
              href={link.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {link.name}
            </a>
          </div>
        ))}
      </nav>

      <div className="mt-10 flex justify-center space-x-10">
        {navigationSocialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{link.name}</span>

            <link.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>

      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2020 Your Company, Inc. All rights reserved.
      </p>
    </div>
  </footer>
);
