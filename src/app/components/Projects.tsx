import Image from "next/image";
import { getRandomProjects } from "../services/api";
import ProjectGallery from "./ProjectGallery";

export default async function Projects() {
  const projects = await getRandomProjects(6);
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold ">Projects</h1>
      <ProjectGallery projects={projects} />
    </div>
  );
}
