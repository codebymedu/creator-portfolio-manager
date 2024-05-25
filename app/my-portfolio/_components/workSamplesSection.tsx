import clsx from "clsx";
import { Title } from "@/_components/title";
import { ProjectCard } from "@/_components/projectCard";

export const WorkSamplesSection = () => (
  <div
    id="work"
    className="p-12 flex justify-between flex-col h-full bg-neutral-100 w-full rounded-xl"
  >
    <Title className="mb-8">Here Is My Best Work</Title>

    <div
      className={clsx("grid gap-8 auto-cols-auto", {
        "grid-cols-1 lg:grid-cols-3": WORK_SAMPLES.length % 2 !== 0,
        "grid-cols-1 lg:grid-cols-2": WORK_SAMPLES.length % 2 === 0,
      })}
    >
      {WORK_SAMPLES.map((workSample) => (
        <ProjectCard
          description={workSample.shortDescription}
          imageSrc={workSample.photo}
          title={workSample.title}
          key={workSample.id}
        />
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
