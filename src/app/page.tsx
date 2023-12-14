import dynamic from "next/dynamic";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import MoreInfo from "./components/MoreInfo";
import ThingsIDo from "./components/ThingsIDo";
const About = dynamic(() => import("@/app/components/About"));
const Projects = dynamic(() => import("@/app/components/Projects"));

export default function Home() {
  return (
    <div className="grid gap-20">
      <HeroSection />
      <ThingsIDo />
      <About />
      <Projects />
      <MoreInfo />
      <Contact />
    </div>
  );
}
