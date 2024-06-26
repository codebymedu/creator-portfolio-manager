import { Button } from "@/_components/button";
import Image from "next/image";

export const HeroSection = () => (
  <div className="relative isolate overflow-hidden bg-white" id="home">
    <svg
      className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </svg>

    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
        <div className="w-full md:w-auto justify-end md:justify-normal flex -mt-4">
          <img
            className="h-11"
            src="https://tailwindui.com/img/logos/mark.svg?color=neutral&shade=600"
            alt="Your Company"
          />
        </div>

        <div className="mt-12 md:mt-24 sm:mt-32 lg:mt-16">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-neutral-600/10 px-3 py-1 text-xs md:text-sm font-semibold flex items-center leading-4 md:leading-6 text-neutral-600 ring-1 ring-inset ring-neutral-600/10">
              Coming Soon
            </span>
            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
              <span>Add Your Gigs and Let Brands Contact You Directly</span>
            </span>
          </a>
        </div>

        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Showcase Your Talent for Free!
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Create a stunning portfolio and connect with top brands. It&apos;s
          easy and completely free!
        </p>

        <div className="mt-5 md:mt-10 flex items-center gap-x-6">
          <Button href="/signup" className="px-4 lg:px-4 text-sm lg:text-base ">
            Get Started Now
          </Button>

          <a
            href="#features"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              src="/portfolio.png"
              alt="Porfolio screenshot"
              width={1891}
              height={931}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
