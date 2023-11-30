"use client";
import React from "react";
import { project } from "../models/project";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectGrid({ projects }: { projects: project[] }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-10">
        {projects.map((proj: project, index) => (
          <motion.div
            key={proj.slug}
            initial={{ opacity: 0, scale: "120%" }}
            animate={{ opacity: 1, scale: "100%" }}
            transition={{ type: "spring", delay: 0.1 * index }}
            className="shadow-neo-hover rounded-md relative transall "
          >
            <img
              className="w-full h-full object-cover rounded-md"
              alt=""
              src={proj.frame || ""}
            />
            <div className="w-full h-full bottom-grad absolute inset-0 opacity-80 rounded-md" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
