import { processSteps } from "@/(landing)/_components/section/_utils/constants";

export const ProcessSection = () => (
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
      {processSteps.map((step) => (
        <div key={step.name}>
          <p className="flex items-center text-sm font-semibold leading-6 text-neutral-600">
            <svg
              viewBox="0 0 4 4"
              className="mr-4 h-1 w-1 flex-none"
              aria-hidden="true"
            >
              <circle cx={2} cy={2} r={2} fill="currentColor" />
            </svg>
            {step.countLabel}
            <div
              className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
              aria-hidden="true"
            />
          </p>
          <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
            {step.name}
          </p>
          <p className="mt-1 text-base leading-7 text-gray-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
