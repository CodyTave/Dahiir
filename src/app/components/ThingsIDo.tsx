"use client";
import Zelij from "@/assets/extra/Zelij";
import React, { useState } from "react";
import { useGlobalContext } from "../context/store";
import { padding } from "../constants/styles";
import { Cards } from "../constants/constants";
import Image from "next/image";

export default function ThingsIDo() {
  const { setVariant } = useGlobalContext();
  const [Hovered, setHovered] = useState("");
  const Hover = (id: string) => {
    setHovered(id);
    setVariant("text");
  };
  const UnHover = () => {
    setHovered("");
    setVariant("default");
  };
  return (
    <div className={padding}>
      <h1 className="flex justify-center text-3xl font-bold">Things I Do ?</h1>
      <div className="flex flex-wrap xl:justify-between justify-center gap-5 mt-16 ">
        {Cards.map(({ id, title, desc, zelij, img }, index) => (
          <div
            onMouseEnter={() => Hover(id)}
            onMouseLeave={UnHover}
            key={id}
            className="flex flex-col gap-5 xs:h-72 xxs:h-64 h-56 bg-dark-3 text-light-0/95 relative xs:w-80  px-6 py-8 rounded-md overflow-hidden"
          >
            <span className="xs:text-3xl text-2xl font-bold">{title}</span>
            <span className="text-light-1 xs:text-base text-sm">{desc}</span>
            <Zelij
              className={`absolute transall  ${
                Hovered === id
                  ? "-right-4 bottom-40 w-20 opacity-10 "
                  : "-right-10 -bottom-20 w-40 opacity-30"
              } patt${(index + 1) % 2}`}
              nb={zelij}
            />
            <div
              className={`w-full absolute ${
                Hovered === id ? "-bottom-0" : " -bottom-full "
              } left-0 h-full transall opacity-[0.03]`}
            >
              <Image className="object-cover w-full h-full" alt="" src={img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
