import Image from "next/image";
import React, { useState } from "react";
import { useGlobalContext } from "../context/store";
import { lHand, rHand } from "@/assets";
import { BackwardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  const { setVariant } = useGlobalContext();
  const [Hovered, setHovered] = useState(false);

  return (
    <div className="relative h-[70vh] flex justify-center items-center">
      <Image
        className={`fixed sm:w-72 xs:w-52 w-28 ${
          Hovered ? "-right-5" : "-right-16"
        }  xs:top-1/3 top-1/2 xs:translate-y-0 -translate-y-full xs:block hidden transall-slow`}
        alt=""
        src={rHand}
      />
      <Image
        className={`fixed sm:w-72 xs:w-52 w-28 ${
          Hovered ? "-left-5 " : "-left-16 "
        }  xs:top-1/3 top-1/2 xs:translate-y-0 -translate-y-full xs:block hidden transall-slow`}
        alt=""
        src={lHand}
      />
      <div
        onMouseLeave={() => {
          setVariant("default");
          setHovered(true);
        }}
        onMouseEnter={() => {
          setVariant("text");
          setHovered(false);
        }}
        className="text-center"
      >
        <h1 className="grid justify-items-center text-8xl font-bold">404</h1>
        <p className="text-2xl font-semibold">Too bad</p>
        <p className=" font-medium">Not Found</p>
        <Link href="/">
          <BackwardIcon className="text-dark-3 h-5 w-5 mx-auto" />
        </Link>
      </div>
    </div>
  );
}
