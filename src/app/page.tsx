import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import NeuralAudit from "@/components/sections/NeuralAudit";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <NeuralAudit />
      <Projects />
    </div>
  );
}