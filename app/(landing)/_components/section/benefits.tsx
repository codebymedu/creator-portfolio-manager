import clsx from "clsx";
import { benefits } from "@/(landing)/_components/section/_utils/constants";

export const BenefitsSection = () => (
  <div
    className="relative isolate bg-white pb-16 md:pb-32 pt-16 md:pt-24 sm:pt-32"
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
);
