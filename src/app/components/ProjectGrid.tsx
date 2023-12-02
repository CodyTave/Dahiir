"use client";
import React, { useState } from "react";
import { project } from "../models/project";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../context/store";
import { joinStrings } from "../Utils/functions";
import Link from "next/link";

export default function ProjectGrid({ projects }: { projects: project[] }) {
  const { setVariant } = useGlobalContext();
  const [Hovered, setHovered] = useState<null | string>(null);
  const Hover = (id: string) => {
    setVariant("card");
    setHovered(id);
  };
  const unHover = () => {
    setVariant("default");
    setHovered(null);
  };
  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-3 gap-x-10 gap-y-8">
        {projects.map((proj: project, index) => (
          <motion.div
            onMouseEnter={() => Hover(proj._id)}
            onMouseLeave={unHover}
            key={proj._id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 * index }}
            className=" rounded-sm relative transall overflow-hidden "
          >
            <Link href={"/work/" + proj.slug}>
              <img
                className="w-full h-full object-cover rounded-sm"
                alt=""
                src={proj.frame || ""}
              />
            </Link>
            <div className="w-full h-full bottom-grad absolute inset-0 opacity-80 rounded-sm" />
            <Link href={"/work/" + proj.slug}>
              <AnimatePresence mode="wait">
                {Hovered === proj._id && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "15%" }}
                    exit={{ y: "100%" }}
                    style={{
                      backgroundColor: `${proj.primaryColor || "#1E1E1E"}`,
                    }}
                    className="absolute w-full h-[80%]  left-0 bottom-0 flex flex-col p-5 text-light-0 gap-2"
                  >
                    <div className="font-bold text-xl">
                      <span>{proj.title}</span>
                      <span className="text-xs text-light-0/40 ml-2 font-medium">
                        {joinStrings(proj.categories)}
                      </span>
                    </div>
                    {proj.technologiesUsed && (
                      <div className="flex">
                        <span className="text-xs">
                          {joinStrings(proj.technologiesUsed)}
                        </span>
                      </div>
                    )}
                    <p className="font-light line-clamp-3 text-sm text-light-0/80">
                      {proj.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
