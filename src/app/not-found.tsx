"use client";
import { lHand, rHand } from "@/assets";
import Image from "next/image";
import { useGlobalContext } from "./context/store";
import { BackwardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found Mate :( ",
  icons: {
    icon: "fav.svg",
  },
};

export default function notfound() {
  const { setVariant } = useGlobalContext();
  const [Hovered, setHovered] = useState(false);
  return (
    <div className="relative h-[70vh] flex justify-center items-center">
      <Image
        className={`fixed ${
          Hovered ? "-right-5" : "-right-16"
        }  top-1/3 transall-slow`}
        alt=""
        src={rHand}
      />
      <Image
        className={`fixed ${
          Hovered ? "-left-5 " : "-left-16 "
        }  top-1/3 transall-slow`}
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
