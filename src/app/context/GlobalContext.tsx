"use client";
import { useEffect, useState } from "react";
import { GlobalContextStore } from "./store";
import { motion } from "framer-motion";

export default function GlobalContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [Variant, setVariant] = useState("default");
  const [inactive, setInactive] = useState(false);
  let timerId: NodeJS.Timeout;

  const variants = {
    default: {
      height: 30,
      width: 30,
      x: cursor.x - 16,
      y: cursor.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: cursor.x - 50,
      y: cursor.y - 50,
      backgroundColor: "white",
    },
    nav: {
      height: 40,
      width: 60,
      x: cursor.x - 30,
      y: cursor.y - 20,
      backgroundColor: "white",
      borderRadius: 0,
    },
  };
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setInactive(false);
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        setInactive(true);
      }, 2500);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <GlobalContextStore.Provider value={{ Variant, setVariant }}>
      {localStorage.getItem("cursor") === "on" && (
        <motion.div
          className={`overlay fadeInBlur ${
            inactive ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
          animate={(variants as any)[Variant] || variants.default}
        />
      )}
      {children}
    </GlobalContextStore.Provider>
  );
}
