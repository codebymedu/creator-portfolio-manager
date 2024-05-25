import { features } from "@/(landing)/_components/section/_utils/constants";

export const FeaturesSection = () => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8" id="features">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-neutral-600">
        Get Seen
      </h2>

      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Why You’ll Love Us
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        See how our platform makes it easy for influencers to create and share
        portfolios. Free setup, easy use, direct brand connections, and more.
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
);
