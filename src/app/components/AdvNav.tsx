import { XMarkIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks, socialLinks } from "../constants/constants";
import { useGlobalContext } from "../context/store";
import { useState } from "react";
import SliderToggle from "./SliderToggle";
import Image from "next/image";
import { zlg1, zlg2 } from "@/assets";
import Zelij from "@/assets/extra/Zelij";

export default function AdvNav({ close }: { close: () => void }) {
  const { setVariant } = useGlobalContext();
  const [linkHovered, setHovered] = useState<string | null>(null);
  const [bg, setBg] = useState<string | null>(null);
  function LinkHover(id: string | null, color: string | null) {
    setBg(color);
    setHovered(id);
  }
  return (
    <motion.div
      initial={{ top: "-100%" }}
      animate={{ top: 0 }}
      exit={{ top: "-100%" }}
      className={`fixed w-full  h-full top-0 left-0 bg-dark-0 text-light-0  px-12 py-5 flex flex-col gap-12 transall z-40`}
    >
      <Zelij
        className="absolute w-28 opacity-25 -right-10 top-20 patt1 "
        nb={1}
      />
      <Zelij
        className="absolute w-16 opacity-25 right-5 top-44 patt2 "
        nb={1}
      />
      <AnimatePresence mode="wait">
        {bg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className={`absolute w-full h-full ${bg} inset-0 -z-10 `}
          />
        )}
      </AnimatePresence>
      <div className="flex justify-between items-center h-fit">
        <div />
        <button onClick={close}>
          <XMarkIcon className="w-7 h-7 " />
        </button>
      </div>
      <ul className="grid gap-7 ">
        {navLinks.map(({ id, link, title }, index) => (
          <motion.li
            className="w-fit"
            onMouseEnter={() => setVariant("text")}
            onMouseLeave={() => setVariant("default")}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ delay: 0.18 * (index + 1.3) }}
            key={id}
          >
            <Link
              className="text-5xl font-bold tracking-wide hover:ml-5 transall "
              href={link}
            >
              {title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <ul className="flex flex-col gap-3 mt-5 font-light">
        {socialLinks.map(({ id, link, title, bg }, index) => (
          <motion.li
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ delay: 0.4 * (index + 1.5) }}
            className="flex items-center transall"
            key={id}
          >
            <span
              className={`${
                linkHovered === id ? "w-4" : "w-0"
              } h-3 overflow-hidden transall`}
            >
              <ArrowUpRightIcon className="w-3 h-3" />
            </span>
            <Link
              onMouseEnter={() => LinkHover(id, bg)}
              onMouseLeave={() => LinkHover(null, null)}
              className={`tracking-wide hover:underline `}
              target="_blank"
              href={link}
            >
              {title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <SliderToggle />
    </motion.div>
  );
}
