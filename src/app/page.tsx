import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import MoreInfo from "./components/MoreInfo";
import Projects from "./components/Projects";
import ThingsIDo from "./components/ThingsIDo";
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
