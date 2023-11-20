"use client";

import Link from "next/link";
import { useGlobalContext } from "../context/store";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdvNav from "./AdvNav";
import { navLinks } from "../constants/constants";
export default function Navbar() {
  const { setVariant } = useGlobalContext();
  const [navToggle, setToggle] = useState(false);
  return (
    <nav className="px-12 py-5 flex justify-between items-center">
      <Link
        href="/"
        onMouseEnter={() => setVariant("text")}
        onMouseLeave={() => setVariant("default")}
        className="font-bold text-xl text-dark-1 select-none"
      >
        Dahiir
      </Link>
      <ul className="sm:flex hidden gap-8 items-center">
        {navLinks.map(({ link, title, id }) => (
          <li key={id}>
            <Link
              onMouseEnter={() => setVariant("nav")}
              onMouseLeave={() => setVariant("default")}
              href={link}
            >
              {title}
            </Link>
          </li>
        ))}
        <Bars3Icon
          onClick={() => setToggle(true)}
          className="w-5 h-5 cursor-pointer"
        />
      </ul>
      <button className="flex sm:hidden">
        <Bars3Icon onClick={() => setToggle(true)} className="w-7 h-7 " />
      </button>
      <AnimatePresence mode="wait">
        {navToggle && <AdvNav close={() => setToggle(false)} />}
      </AnimatePresence>
    </nav>
  );
}
