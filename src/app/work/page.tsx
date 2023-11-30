import React from "react";
import { getProjects } from "../services/api";
import ProjectGrid from "../components/ProjectGrid";

export default async function page() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold mb-16 text-grbl ">
        Work
      </h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}
