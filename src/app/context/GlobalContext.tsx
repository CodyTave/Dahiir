"use client";
import { useEffect, useRef, useState } from "react";
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
  const timerId = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const cachedState = localStorage.getItem("cursor");
    if (cachedState) {
      setCursorOn(cachedState);
    }
  }, []);
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
    card: {
      height: 80,
      width: 80,
      x: cursor.x - 40,
      y: cursor.y - 40,
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
    bigSquare: {
      height: 60,
      width: 120,
      x: cursor.x - 60,
      y: cursor.y - 30,
      backgroundColor: "#fff",
      borderRadius: 0,
    },
    arrow: {
      height: 2,
      width: 30,
      x: cursor.x - 15,
      y: cursor.y - 1,
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
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        setInactive(true);
      }, 1500);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearTimeout(timerId.current);
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
