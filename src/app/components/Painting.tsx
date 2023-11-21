"use client";
import { useState } from "react";
import { useGlobalContext } from "../context/store";
import Image from "next/image";
import { lHand, painting, rHand } from "@/assets";

export default function Painting() {
  const [Hovered, setHovered] = useState(false);
  const { setVariant } = useGlobalContext();
  function handleHov(arg: boolean) {
    setHovered(arg);
    setVariant(arg ? "painting" : "default");
  }

  return (
    <div
      onMouseEnter={() => handleHov(true)}
      onMouseLeave={() => handleHov(false)}
      className="flex rounded-md relative ml-auto sm:w-[85%] h-80 overflow-hidden"
    >
      <Image className="w-full h-full object-cover" alt="" src={painting} />
      <Image
        className={`absolute w-40 sm:w-60 ${
          Hovered ? "-right-2 top-20" : "-right-24 top-0"
        } transall-slow`}
        alt=""
        src={rHand}
      />
      <Image
        className={`absolute w-40 sm:w-60 ${
          Hovered ? "-left-2 bottom-16" : "-left-24 bottom-0"
        } transall-slow `}
        alt=""
        src={lHand}
      />
      <div
        className={`bg-dark-0 ${
          Hovered ? "opacity-5" : "opacity-60"
        } w-full h-full inset-0 absolute transall-slow`}
      />
    </div>
  );
}
