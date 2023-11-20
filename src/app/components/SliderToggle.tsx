import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3  py-1.5 transition-colors relative z-10 shrink-0";

const SliderToggle = () => {
  const init = localStorage.getItem("cursor") || "on";
  const [cursorState, setCursorState] = useState(init);
  useEffect(() => {
    localStorage.setItem("cursor", cursorState);
  }, [cursorState]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5 }}
      className="flex items-center gap-3"
    >
      <span>Cursor </span>
      <div className="relative flex w-fit items-center rounded-full">
        <button
          className={`${TOGGLE_CLASSES} ${
            cursorState === "on" ? "text-white" : "text-slate-300"
          }`}
          onClick={() => {
            setCursorState("on");
          }}
        >
          <CheckIcon className="relative z-10 text-lg md:text-sm text-light-0 w-5 h-5" />
          <span className="relative z-10">On</span>
        </button>
        <button
          className={`${TOGGLE_CLASSES} text-light-0`}
          onClick={() => {
            setCursorState("off");
          }}
        >
          <XMarkIcon className="relative z-10 text-lg md:text-sm text-light-0 w-5 h-5" />
          <span className="relative z-10">Off</span>
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${
            cursorState === "off" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SliderToggle;
