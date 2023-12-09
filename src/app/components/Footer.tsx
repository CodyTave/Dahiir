"use client";
import Link from "next/link";
import { footerLinks } from "../constants/constants";
import { useGlobalContext } from "../context/store";
import Zelij from "@/assets/extra/Zelij";

export default function Footer() {
  const { setVariant } = useGlobalContext();
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-dark-3 text-light-0 px-12 py-10 flex flex-col md:flex-row flex-wrap justify-start lg:gap-x-0 gap-x-20 gap-y-8">
        <span
          onMouseEnter={() => setVariant("text")}
          onMouseLeave={() => setVariant("default")}
          className="text-light-0 text-xl font-bold flex  gap-1 lg:w-1/4 "
        >
          <span className="text-dark-2">Oussama </span>Dahiir
        </span>
        {footerLinks.map((sect) => (
          <div className="flex flex-col mt-1 lg:w-1/4 " key={sect.id}>
            <div
              onMouseEnter={() => setVariant("nav")}
              onMouseLeave={() => setVariant("default")}
              className="font-semibold mb-7"
            >
              {sect.title}
            </div>
            <div className="flex flex-col gap-5 text-light-1">
              {sect.links.map((link) => (
                <Link
                  target={link.external ? "_blank" : "_self"}
                  className="hover:underline w-fit"
                  key={link.id}
                  href={link.url}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-[#1B1919] px-5 text-light-0/20 text-xs py-2 flex justify-end">
        {"© Designed and Coded by Dahiir "}
      </div>
      <Zelij
        nb={2}
        className="absolute w-48 bottom-5 -right-20 opacity-5 patt0  "
      />
    </footer>
  );
}
