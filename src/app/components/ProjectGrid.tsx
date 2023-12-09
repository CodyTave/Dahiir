"use client";
import React, { useState } from "react";
import { project } from "../models/project";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../context/store";
import { joinStrings } from "../Utils/functions";
import Link from "next/link";
import Zelij from "@/assets/extra/Zelij";

export default function ProjectGrid({ projects }: { projects: project[] }) {
  const { setVariant } = useGlobalContext();
  const [Hovered, setHovered] = useState<null | string>(null);
  const [randomZelij, setZelij] = useState<1 | 2 | 3>(2);
  const Hover = (id: string) => {
    const zelija = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
    setZelij(zelija);
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
            className=" rounded-sm relative transall overflow-hidden h-[300px] "
          >
            <img
              className={`w-full h-full object-cover rounded-sm `}
              alt=""
              src={proj.frame || ""}
            />
            <div
              className={`w-full h-full  ${
                Hovered === proj._id ? "dark-overlay" : "bottom-grad"
              } absolute inset-0 opacity-80 rounded-sm transall`}
            />
            <Link href={"/work/" + proj.slug}>
              <AnimatePresence mode="wait">
                {Hovered === proj._id && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "15%" }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      damping: 20,
                      stiffness: 200,
                    }}
                    className="absolute w-full h-[118%] left-0 bottom-0 flex flex-col p-5 text-light-0 gap-2 bg-dark-3"
                  >
                    <div className="font-bold text-2xl">
                      <span className="hover:underline">{proj.title}</span>
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
                    <p className="font-light line-clamp-2 text-sm text-light-0/80">
                      {proj.description}
                    </p>
                    {proj.images?.length !== 0 && (
                      <div className="flex gap-3 overflow-x-auto scrollbar-hidden">
                        {proj.images?.slice(0, 3).map((img) => (
                          <img
                            key={img}
                            className="w-36 rounded-sm"
                            src={img}
                          />
                        ))}
                      </div>
                    )}
                    <Zelij
                      className={`absolute w-40 opacity-30 -right-10 -bottom-10 patt${
                        (index + 1) % 2
                      }`}
                      nb={randomZelij}
                    />
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
