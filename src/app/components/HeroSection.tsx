"use client";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  const { setVariant } = useGlobalContext();
  const Variants = ["Designer", "Developer"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Variants.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10 text-6xl font-bold gap-5 ">
        <span>Creative</span>
        <div
          onMouseEnter={() => setVariant("text")}
          onMouseLeave={() => setVariant("default")}
          className="w-80 h-24 overflow-hidden flex relative"
        >
          <AnimatePresence mode="wait">
            <motion.span
              className={`${index === 0 ? "text-pkbl" : "text-grbl"}`}
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              exit={{ y: -70 }}
              key={Variants[index]}
            >
              {Variants[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
