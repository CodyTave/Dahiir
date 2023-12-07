import JsonBlock from "@/app/components/JsonBlock";
import DetailsComponent from "@/app/components/DetailsComponent";
import MethodDoc from "@/app/components/MethodDoc";
import { getProject } from "@/app/services/api";
import NextProject from "@/app/components/NextProject";
import Button from "@/app/components/Button";

export default async function page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  return (
    <div className="mb-20 sm:px-20 grid">
      <div className="grid">
        <div className="grid gap-8 h-fit">
          {/* <div className="w-full h-32 flex justify-center rounded-md relative  ">
            <img
              src={project.frame}
              className="w-[80%] h-full object-cover rounded-b-[70px] "
            />
          </div> */}
          <h1
            style={{ color: project.primaryColor }}
            className="text-5xl font-bold text-dark-3"
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-28 gap-y-10">
            <DetailsComponent
              color={project.primaryColor}
              title="Technologies"
              elements={project.technologiesUsed}
            />

            <DetailsComponent
              color={project.primaryColor}
              title="Category"
              elements={project.categories}
            />
            {project.clientOrCompany && (
              <DetailsComponent
                color={project.primaryColor}
                title="Client"
                elements={[project.clientOrCompany]}
              />
            )}
            {project.year && (
              <DetailsComponent
                color={project.primaryColor}
                title="Year"
                elements={[project.year]}
              />
            )}
          </div>
          <p style={{ color: project.primaryColor }}>{project.description}</p>
          <button
            style={{ backgroundColor: project.primaryColor }}
            className="flex w-fit  text-light-0 px-10 py-2 rounded-md font-semibold hover:opacity-90 transall"
          >
            Visit live Site
          </button>
          <MethodDoc
            method="GET"
            title="Project"
            endpoint="/projects"
            path={project.slug}
          />
          <JsonBlock expandable code={JSON.stringify(project, null, 5)} />
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
      <NextProject current={project.slug} />
    </div>
  );
}
