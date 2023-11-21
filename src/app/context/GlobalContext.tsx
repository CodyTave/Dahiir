"use client";
import { useEffect, useState } from "react";
import { GlobalContextStore } from "./store";
import { motion } from "framer-motion";

export default function GlobalContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursor, setCursor] = useState({ x: 0, y: -25 });
  const [Variant, setVariant] = useState("default");
  const [inactive, setInactive] = useState(false);
  const [cursorOn, setCursorOn] = useState("on");
  useEffect(() => {
    const cachedState = localStorage.getItem("cursor");
    if (cachedState) {
      setCursorOn(cachedState);
    }
  }, []);
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
      backgroundColor: "#fff",
    },
    painting: {
      height: 150,
      width: 150,
      x: cursor.x - 50,
      y: cursor.y - 50,
      mixBlendMode: "multiply",
    },
    small: {
      height: 10,
      width: 10,
      x: cursor.x - 5,
      y: cursor.y - 5,
      backgroundColor: "#fff",
    },
    nav: {
      height: 40,
      width: 60,
      x: cursor.x - 30,
      y: cursor.y - 20,
      backgroundColor: "#fff",
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
      }, 1500);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <GlobalContextStore.Provider
      value={{ Variant, setVariant, cursorOn, setCursorOn }}
    >
      {cursorOn === "on" && (
        <motion.div
          className={`overlay  ${
            inactive ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
          animate={(variants as any)[Variant] || variants.default}
        />
      )}
      {children}
    </GlobalContextStore.Provider>
  );
}
