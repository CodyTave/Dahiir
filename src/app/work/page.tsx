import React from "react";
import { getProjects } from "../services/api";
import ProjectGrid from "../components/ProjectGrid";

export default async function page() {
  const projects = await getProjects();
  return (
    <div>
      <div className="my-16 flex flex-col justify-center text-dark-3 text-center gap-3 ">
        <h1 className="text-5xl font-bold gap-2 ">
          <span className="text-grbl">Checkout</span> {" some of my work"}
        </h1>
        <p className="font-medium">
          {"Some of the really cool projects i have made or took part of"}
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  );
}
