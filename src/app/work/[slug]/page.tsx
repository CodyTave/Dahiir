import JsonBlock from "@/app/components/JsonBlock";
import DetailsComponent from "@/app/components/DetailsComponent";
import MethodDoc from "@/app/components/MethodDoc";
import { getProject } from "@/app/services/api";

export default async function page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  return (
    <div className="mb-20">
      <div className="grid">
        <div className="grid gap-8 h-fit">
          <h1 className="text-5xl font-bold text-dark-0">{project.title}</h1>
          <MethodDoc
            method="GET"
            title="Project"
            endpoint="/projects"
            path={project.slug}
          />
          <JsonBlock wrap code={JSON.stringify(project, null, 10)} />

          <p>{project.description}</p>
          <div className="flex gap-x-28 gap-y-10">
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
      <div className="grid gap-10 mt-10">
        {project.images && (
          <div className=" w-full mx-auto grid gap-10">
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
