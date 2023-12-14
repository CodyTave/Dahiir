"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Loading() {
  const dots = [".", ".", "."];
  return (
    <div className="flex items-center justify-center h-[80vh] font-bold text-4xl ">
      <span>Loading</span>
      {dots.map((dot, index) => (
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            repeatDelay: 0.5,
            duration: 0.4,
            delay: index * 0.2,
          }}
          key={index}
        >
          {dot}
        </motion.span>
      ))}
    </div>
  );
}
