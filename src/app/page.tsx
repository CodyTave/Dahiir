"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [MousePos, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = {
    default: {
      height: 30,
      width: 30,
      x: MousePos.x - 16,
      y: MousePos.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: MousePos.x - 50,
      y: MousePos.y - 50,
      backgroundColor: "white",
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="overlay "
        animate={(variants as any)[cursorVariant]}
      />
      <main className="flex flex-col items-center p-24 ">
        <h1
          onMouseLeave={() => setCursorVariant("default")}
          onMouseEnter={() => setCursorVariant("text")}
          className="font-semibold text-6xl text-grbl "
        >
          Dahiir.dev
        </h1>
        <p className="font-medium inter">Very Soon</p>
        <div
          onMouseLeave={() => setCursorVariant("default")}
          onMouseEnter={() => setCursorVariant("text")}
          className=" w-80 h-64 bg-dark-0 rounded-md text-dark-2 px-5 py-8 flex flex-col gap-5 mt-10"
        >
          <h2 className="text-light-0 text-3xl font-bold">I Design</h2>
          <p>Pretty things and enjoyable Unique experiences</p>
        </div>
      </main>
    </>
  );
}
