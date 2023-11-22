"use client";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Signature from "@/assets/extra/Signature";
import Button from "./Button";
export default function HeroSection() {
  const { setVariant } = useGlobalContext();
  const Constant = "Creative";
  const Variants = ["Designer", "Developer"];
  const subDesc = "the Right way of engineering solutions";
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Variants.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [Variants.length]);

  return (
    <div className="flex flex-col justify-center sm:mt-28 mt-16 ">
      <div className="flex flex-col sm:flex-row justify-center text-5xl sm:text-6xl font-bold gap-x-3 ">
        <span className="text-center">{Constant}</span>
        <div
          onMouseEnter={() => setVariant("text")}
          onMouseLeave={() => setVariant("default")}
          className=" sm:h-24 h-16 overflow-hidden flex relative justify-center  "
        >
          <AnimatePresence mode="wait">
            <motion.span
              className={`${
                index === 0 ? "text-pkbl" : "text-grbl"
              } sm:w-80 xs:w-fit`}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              key={Variants[index]}
            >
              {Variants[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center ">
        <p className="xs:w-fit w-full font-semibold text-center sm:text-xl xs:text-base text-xs border p-2 px-5 rounded-md border-green-0 border-dashed relative ">
          {subDesc}
          <Signature className="absolute -right-14 sm:top-full " />
        </p>
      </div>
      <div className="flex xs:flex-row flex-col justify-center gap-5 mt-5">
        <Button>Get Started</Button>
        <Button light>Contact</Button>
      </div>
    </div>
  );
}
