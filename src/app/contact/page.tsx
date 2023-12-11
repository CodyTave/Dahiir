import React from "react";
import Contact from "../components/Contact";
import About from "../components/About";

export default function page() {
  return (
    <div className="mb-16">
      <Contact noPadding />
      <About noPadding />
    </div>
  );
}
