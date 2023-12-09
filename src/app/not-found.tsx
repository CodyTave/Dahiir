"use client";
import { Metadata } from "next";
import NotFound from "@/app/components/NotFound";
export const metadata: Metadata = {
  title: "Not Found Mate :( ",
  icons: {
    icon: "fav.svg",
  },
};

export default function notfound() {
  return <NotFound />;
}
