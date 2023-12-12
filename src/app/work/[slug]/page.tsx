import JsonBlock from "@/app/components/JsonBlock";
import DetailsComponent from "@/app/components/DetailsComponent";
import MethodDoc from "@/app/components/MethodDoc";
import { getProject } from "@/app/services/api";
import Link from "next/link";
import Image from "next/image";
import ArrowLongRight from "@/assets/extra/ArrowLongRight";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  return {
    title: project.title + " - Work ",
    icons: {
      icon: "/fav.svg",
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  return (
    <div className="mb-20 sm:px-20 grid">
      <div className="grid">
        <div className="grid gap-8 h-fit">
          <h1 className="text-5xl font-bold text-dark-3">{project.title}</h1>
          <p className="max-w-4xl">{project.description}</p>
          {project.url && (
            <Link
              target="_blank"
              href={project.url}
              className="flex w-fit bg-dark-3 text-light-0 px-10 py-2 rounded-md font-semibold hover:opacity-90 transall"
            >
              Visit live Site
            </Link>
          )}

          <div className="flex md:flex-row flex-col gap-x-28 gap-y-10 flex-wrap">
            <DetailsComponent
              title="Technologies"
              elements={project.technologiesUsed}
            />

            <DetailsComponent title="Category" elements={project.categories} />
            {project.clientOrCompany && (
              <DetailsComponent
                title="Client"
                elements={[project.clientOrCompany]}
              />
            )}
            {project.year && (
              <DetailsComponent title="Year" elements={[project.year]} />
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-8 h-fit mt-8">
        <MethodDoc
          method="GET"
          title="Project"
          endpoint="/projects"
          path={project.slug}
        />
        <JsonBlock expandable code={JSON.stringify(project, null, 5)} />
      </div>
      <div className="grid gap-10 mt-10">
        {project.images && (
          <div className=" w-full mx-auto grid gap-10">
            {project.images.map((img: string) => (
              <Image
                blurDataURL="/Photos/naturo1/png"
                placeholder="blur"
                loading="lazy"
                alt=""
                sizes="100%"
                width={0}
                height={0}
                className="w-full object-cover rounded-md"
                src={img}
                key={img}
              />
            ))}
          </div>
        )}
      </div>
      <Link
        href={`/work/random?except=${project.slug}`}
        className="mt-20 ml-auto hover:-mr-5 transall"
      >
        <ArrowLongRight className="w-40 text-dark-3 " />
        <span className="text-xs text-dark-3/80">Get a random project</span>
      </Link>
    </div>
  );
}
