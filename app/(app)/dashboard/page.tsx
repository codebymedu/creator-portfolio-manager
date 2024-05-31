const stats = [
  { id: 1, name: "Visitors today", value: "20" },
  { id: 2, name: "Visitors in the last 7 days", value: "143" },
  { id: 3, name: "Visitors in the last 30 days", value: "846" },
  { id: 4, name: "Lifetime visitors", value: "1504" },
];

const Page = () => {
  // --- RENDER ---

  return (
    <div className="  sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Welcome to your portfolio manager
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              These are the latest analytics about your visitors
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-neutral-900/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-neutral-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-neutral-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Page;
