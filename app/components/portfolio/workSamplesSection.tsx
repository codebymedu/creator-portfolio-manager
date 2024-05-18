import clsx from "clsx";
import Image from "next/image";
import { Title } from "@/app/components/title";

export const WorkSamplesSection = () => (
  <div
    id="work"
    className="p-12 flex justify-between flex-col h-full bg-neutral-100 w-full rounded-xl"
  >
    <Title className="mb-8">Here Is My Best Work</Title>

    <div
      className={clsx("grid  gap-8 auto-cols-auto", {
        "grid-cols-1 lg:grid-cols-3": WORK_SAMPLES.length % 2 !== 0,
        "grid-cols-1 lg:grid-cols-2": WORK_SAMPLES.length % 2 === 0,
      })}
    >
      {WORK_SAMPLES.map((workSample) => (
        <article
          key={workSample.id}
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
        >
          <Image
            src={workSample.photo}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-110"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:hidden" />

          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10 group-hover:hidden" />

          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 group-hover:hidden">
            <p className="mr-8">{workSample.shortDescription}</p>
          </div>

          <h3 className="mt-3 text-xl lg:text-lg font-semibold leading-6 text-white">
            <a href={"#"}>
              <span className="absolute inset-0" />
              {workSample.title}
            </a>
          </h3>
        </article>
      ))}
    </div>
  </div>
);

type WorkSample = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  photo: string;
};

// this should come from backend.
const WORK_SAMPLES: WorkSample[] = [
  {
    id: 1,
    longDescription:
      "Nullam vulputate, nibh sed feugiat iaculis, justo erat fringilla ante, id mollis quam libero vel ipsum. In ut blandit nisl, vel efficitur lorem. Aliquam nisi massa, porta quis dolor ac, hendrerit elementum orci. Ut consequat auctor justo id rhoncus. Donec convallis a est sed vehicula. Sed facilisis cursus magna sed aliquam. Etiam facilisis accumsan tristique. Aliquam eros nibh, faucibus ut sollicitudin eget, condimentum sit amet nunc. Aliquam erat volutpat. Aliquam pharetra odio vitae sapien condimentum, eu posuere nisl imperdiet.",
    photo: "/worksample.jpg",
    shortDescription:
      "Proin euismod sem ullamcorper nibh maximus, vitae accumsan tellus congue. Maecenas venenatis consectetur mi, sit amet ornare sem interdum at. ",
    title: "My Lovely Pizzas",
  },
  {
    id: 2,
    longDescription:
      "Nullam vulputate, nibh sed feugiat iaculis, justo erat fringilla ante, id mollis quam libero vel ipsum. In ut blandit nisl, vel efficitur lorem. Aliquam nisi massa, porta quis dolor ac, hendrerit elementum orci. Ut consequat auctor justo id rhoncus. Donec convallis a est sed vehicula. Sed facilisis cursus magna sed aliquam. Etiam facilisis accumsan tristique. Aliquam eros nibh, faucibus ut sollicitudin eget, condimentum sit amet nunc. Aliquam erat volutpat. Aliquam pharetra odio vitae sapien condimentum, eu posuere nisl imperdiet.",
    photo: "/worksample2.jpg",
    shortDescription:
      "Proin euismod sem ullamcorper nibh maximus, vitae accumsan tellus congue. Maecenas venenatis consectetur mi, sit amet ornare sem interdum at. ",
    title: "My Lovely Car",
  },
  {
    id: 3,
    longDescription:
      "Nullam vulputate, nibh sed feugiat iaculis, justo erat fringilla ante, id mollis quam libero vel ipsum. In ut blandit nisl, vel efficitur lorem. Aliquam nisi massa, porta quis dolor ac, hendrerit elementum orci. Ut consequat auctor justo id rhoncus. Donec convallis a est sed vehicula. Sed facilisis cursus magna sed aliquam. Etiam facilisis accumsan tristique. Aliquam eros nibh, faucibus ut sollicitudin eget, condimentum sit amet nunc. Aliquam erat volutpat. Aliquam pharetra odio vitae sapien condimentum, eu posuere nisl imperdiet.",
    photo: "/worksample.jpg",
    shortDescription:
      "Proin euismod sem ullamcorper nibh maximus, vitae accumsan tellus congue. Maecenas venenatis consectetur mi, sit amet ornare sem interdum at. ",
    title: "My Lovely Pizzas",
  },
];
