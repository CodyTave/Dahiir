"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { project } from "../models/project";
import { useState } from "react";
import { padding } from "../constants/styles";
import { AnimatePresence, motion } from "framer-motion";
import ProjectLinkButton from "./ProjectLinkButton";
export default function ProjectGallery({ projects }: { projects: project[] }) {
  const [Hovered, setHovered] = useState<string | null>(null);
  const [Frame, setImage] = useState<string | null>(null);
  const Hover = (id: string, frame?: string) => {
    setHovered(id);
    setImage(frame || null);
  };
  const unHover = () => {
    setHovered(null);
    setImage(null);
  };
  return (
    <div className={padding + "flex justify-between py-5"}>
      <div className="grid h-96">
        <div className="grid gap-5 shrink-0 h-fit">
          {projects.map((proj) => (
            <ProjectLinkButton
              key={proj._id}
              Hovered={Hovered === proj._id}
              link="/projects"
              title={proj.title}
              unHover={unHover}
              Hover={() => Hover(proj._id, proj.frame)}
            />
          ))}
          <ProjectLinkButton
            more
            Hovered={Hovered === "more"}
            link="/projects"
            title="Mooooore"
            unHover={unHover}
            Hover={() => Hover("more")}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {Frame && (
          <motion.div
            initial={{ opacity: 0, scale: "120%" }}
            animate={{ opacity: 1, scale: "100%" }}
            exit={{ opacity: 0 }}
            className="mlg:block hidden h-96 w-1/2 shadow-neo rounded-md relative"
          >
            <img
              key={Frame}
              className="w-full h-full object-cover rounded-md"
              alt=""
              src={Frame || ""}
            />
            <div className="w-full h-full bottom-grad absolute inset-0 opacity-80" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
