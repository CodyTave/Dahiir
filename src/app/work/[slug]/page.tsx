import DetailsComponent from "@/app/components/DetailsComponent";
import { getProject } from "@/app/services/api";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2">
        <div className="grid gap-8 h-fit">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p>{project.description}</p>
          <div className="flex  flex-col gap-x-28 gap-y-10">
            {project.year && (
              <DetailsComponent title="Year" elements={[project.year]} />
            )}
            {project.clientOrCompany && (
              <DetailsComponent
                title="Client"
                elements={[project.clientOrCompany]}
              />
            )}
            <DetailsComponent title="Category" elements={project.categories} />
            <DetailsComponent
              title="Technologies"
              elements={project.technologiesUsed}
            />
          </div>
        </div>
        <img src={project.frame} className="object-cover h-full rounded-md" />
      </div>
      <div className="grid gap-10 mt-10">
        {project.images && (
          <div className="w-full grid gap-10">
            {project.images.map((img: string) => (
              <img
                className="w-full object-cover rounded-md"
                src={img}
                key={img}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
