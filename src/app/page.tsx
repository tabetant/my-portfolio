import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      {/* <Projects /> */}
    </div>
  );
}