import React from "react";
import useRandom from "../hooks/useRandom";
import ArrowLongRight from "@/assets/extra/ArrowLongRight";
import Link from "next/link";

export default async function NextProject({ current }: { current: string }) {
  return (
    <Link href="/work/random" className="mt-20 ml-auto hover:-mr-5 transall">
      <ArrowLongRight className="w-40 text-dark-3 " />
      <span className="text-xs text-dark-3/80">Get a random project</span>
    </Link>
  );
}
