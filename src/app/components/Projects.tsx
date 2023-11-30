import { getProjects } from "../services/api";
import ProjectGallery from "./ProjectGallery";

export default async function Projects() {
  const projects = await getProjects(5);
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold mb-16 ">
        Projects
      </h1>
      <ProjectGallery projects={projects} />
    </div>
  );
}
