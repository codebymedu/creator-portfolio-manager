import Image from "next/image";
import {
  HiOutlineEnvelope,
  HiOutlineCog8Tooth,
  HiOutlineFolder,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { Button } from "@/_components/button";
import clsx from "clsx";

const process = [
  {
    name: "Sign Up",
    description:
      "Join our platform by signing up for free. It only takes a few minutes to get started.",
    date: "First step",
  },
  {
    name: "Create Portfolio",
    description:
      "Add your best work, job experiences, and gigs to your portfolio. Make it shine and show what you can do.",
    date: "Second step",
  },
  {
    name: "Publish and Share",
    description:
      "Publish your portfolio and share it with brands and your audience. Get noticed and start getting offers.",
    date: "Third step",
  },
];

const features = [
  {
    name: "Free Portfolio",
    description:
      "Create and publish your portfolio for free. Show your best work and let brands discover your talent easily.",
    icon: HiOutlineFolder,
  },
  {
    name: "Easy Setup",
    description:
      "Quickly set up your profile and start adding your projects. No hassle, just simple steps.",
    icon: HiOutlineCog8Tooth,
  },
  {
    name: "Direct Contact (coming soon)",
    description:
      "Brands can reach out to you directly through your portfolio. Get noticed and get offers.",
    icon: HiOutlineEnvelope,
  },
  {
    name: "Job Listings (coming soon)",
    description:
      "Add your experiences and gigs to your portfolio. Show brands what you've done and what you can do.",
    icon: HiOutlineDocumentText,
  },
];

const benefits = [
  [
    [
      {
        description:
          "Brands can reach out to you directly through your portfolio. Get noticed and receive offers from top brands.",
        title: "Direct Contact (coming soon)",
      },
      {
        description:
          "Add your job experiences and gigs to your portfolio. Show brands what you've done and what you can do.",
        title: "Job Listings (coming soon)",
      },
      {
        description:
          "Get your portfolio seen by more people. Our platform helps you reach a wider audience and attract more followers.",
        title: "Increased Visibility (coming soon)",
      },
    ],
  ],
  [
    [
      {
        description:
          "Showcase your best work and build a strong online reputation. Let your portfolio speak for your skills and experience.",
        title: "Build Reputation",
      },
      {
        description:
          "Connect with other influencers and brands. Expand your professional network and open up new opportunities.",
        title: "Networking Opportunities (coming soon)",
      },
      {
        description:
          "Personalize your portfolio to reflect your unique style and personality. Make it truly yours.",
        title: "Customizable Portfolio",
      },
    ],
  ],
  [
    [
      {
        description:
          "Promote your portfolio without any cost. Our platform helps you market yourself to brands and followers.",
        title: "Free Marketing (coming soon)",
      },
      {
        description:
          "Rest assured that your data is safe with us. We prioritize security to protect your information and work.",
        title: "Secure Platform",
      },
      ,
      {
        description:
          "Gain insights into how your portfolio is performing. Track views, interactions, and more to understand your impact.",
        title: "Analytics Insights",
      },
    ],
  ],
];

export default function Home() {
  return (
    <main>
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
            <img
              className="h-11"
              src="https://tailwindui.com/img/logos/mark.svg?color=neutral&shade=600"
              alt="Your Company"
            />

            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-neutral-600/10 px-3 py-1 text-sm font-semibold leading-6 text-neutral-600 ring-1 ring-inset ring-neutral-600/10">
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
              Create a stunning portfolio and connect with top brands. It's easy
              and completely free!
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <Button className="px-4 lg:px-4 text-base lg:text-base ">
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="features">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-neutral-600">
            Get Seen
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why You’ll Love Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our platform makes it easy for influencers to create and
            share portfolios. Free setup, easy use, direct brand connections,
            and more.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-52 pb-24" id="process">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these simple steps to get started: sign up, create your
            portfolio, and publish it to share with brands and followers.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {process.map((item) => (
            <div key={item.name}>
              <p className="flex items-center text-sm font-semibold leading-6 text-neutral-600">
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </p>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative isolate bg-white pb-32 pt-24 sm:pt-32"
        id="benefits"
      >
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#fafafa] to-[#0a0a0a]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#fafafa] to-[#0a0a0a] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefits for Influencers
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
            {benefits.map((nestedBenefits, index) => (
              <div key={index} className="space-y-8 xl:contents xl:space-y-0">
                {nestedBenefits.map((benefit, nestedBenefitIndex) => (
                  <div
                    key={nestedBenefitIndex}
                    className={clsx(
                      (index === 0 && nestedBenefitIndex === 0) ||
                        (index === benefits.length - 1 &&
                          nestedBenefitIndex === nestedBenefits.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {/* @ts-ignore */}
                    {benefit.map(({ description, title }) => (
                      <figure
                        key={title}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <figcaption className="mb-4 flex items-center gap-x-4">
                          <div>
                            <div className="font-semibold">{title}</div>
                          </div>
                        </figcaption>

                        <blockquote className="text-gray-900">
                          <p>{description}</p>
                        </blockquote>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-neutral-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Us Today!
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Sign up now and start creating your free portfolio. Connect with
              brands, showcase your talent, and grow your influence
              effortlessly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#fafafa" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
