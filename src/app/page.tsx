import About from "./components/About";
import HeroSection from "./components/HeroSection";
import ThingsIDo from "./components/ThingsIDo";
export default function Home() {
  return (
    <div className="grid gap-20">
      <HeroSection />
      <ThingsIDo />
      <About />
    </div>
  );
}
