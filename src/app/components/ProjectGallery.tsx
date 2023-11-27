"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { project } from "../models/project";
import { useState } from "react";
import { padding } from "../constants/styles";
export default function ProjectGallery({ projects }: { projects: project[] }) {
  const [Hovered, setHovered] = useState<string | null>(null);
  const Hover = (id: string) => {
    setHovered(id);
  };
  const UnHover = () => {
    setHovered(null);
  };
  return (
    <div className={padding + "flex justify-between"}>
      <div className="grid gap-5">
        {projects.map((proj) => (
          <div className="w-fit" key={proj._id}>
            <div className="flex items-center">
              <span
                className={`${
                  Hovered === proj._id ? "w-5 mr-2" : "w-0 mr-0"
                } overflow-hidden transall`}
              >
                <ArrowUpRightIcon className={`text-dark-0 h-5 w-5 stroke-2 `} />
              </span>
              <h4
                onMouseEnter={() => Hover(proj._id)}
                onMouseLeave={UnHover}
                className={`font-bold text-4xl w-fit ${
                  Hovered === proj._id ? "text-dark-0" : "text-dark-2"
                }`}
              >
                {proj.title}
              </h4>
            </div>
            <span
              className={`${
                Hovered === proj._id ? "w-full" : "w-0"
              } h-[3px] bg-dark-3 block transall`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
