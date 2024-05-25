import Image from "next/image";

type ProjectCardProps = {
  imageSrc: string;
  description: string;
  title: string;
};

export const ProjectCard = ({
  description,
  imageSrc,
  title,
}: ProjectCardProps) => (
  <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group h-96">
    <Image
      src={imageSrc}
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-110"
      width={600}
      height={600}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:hidden" />

    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10 group-hover:hidden" />

    <div className="flex flex-wrap items-center gap-y-1 text-sm leading-6 text-gray-300 group-hover:hidden">
      <p className="mr-8">{description}</p>
    </div>

    <h3 className="mt-3 text-xl lg:text-lg font-semibold leading-6 text-white">
      <a href={"#"}>
        <span className="absolute inset-0" />
        {title}
      </a>
    </h3>
  </article>
);
