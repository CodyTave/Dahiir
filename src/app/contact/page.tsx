import React from "react";
import Contact from "../components/Contact";
import About from "../components/About";

export default function page() {
  return (
    <div>
      <Contact noPadding />
      <About noPadding />
    </div>
  );
}
