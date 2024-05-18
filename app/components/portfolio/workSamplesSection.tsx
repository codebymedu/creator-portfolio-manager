import { Card } from "@/app/components/card";
import Image from "next/image";

export const WorkSamplesSection = () => (
  <div
    id="work"
    className="p-12 flex justify-between flex-col h-full bg-neutral-100 w-full rounded-xl"
  >
    <h1 className="text-neutral-900 text-4xl font-bold mb-8">
      Here Is My Best Work
    </h1>

    <div className="grid grid-cols-3 gap-8 auto-cols-auto">
      {WORK_SAMPLES.map((workSample) => (
        <div className="">
          <Card key={workSample.id} className="flex flex-col">
            <Image
              alt={`${workSample.title} preview`}
              src={workSample.photo}
              width={600}
              height={600}
              className="object-fill rounded-md border-2 border-neutral-50 mb-4"
            />

            <p className="mb-4">{workSample.title}</p>

            <p className="text-neutral-400 text-sm mb-4">
              {workSample.shortDescription}
            </p>

            <p className="mb-4 text-sm font-bold">Learn More</p>
          </Card>
        </div>
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
