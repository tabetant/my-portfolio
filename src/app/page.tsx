import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Poetry from "@/components/sections/Poetry";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Poetry />
      <Contact />
    </div>
  );
}