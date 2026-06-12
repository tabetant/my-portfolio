import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Click-A-Mole | Antoine Tabet",
  description: "Embedded systems project: high-performance mechatronic Whack-A-Mole with real-time FSM engine and bare-metal hardware control.",
  openGraph: {
    title: "Click-A-Mole | Antoine Tabet",
    description: "C++ game engine with custom memory management, FSM architecture, and hardware-software co-design.",
    url: "https://antoinetabet.vercel.app/projects/click-a-mole",
  },
};

export default function ClickAMolePage() {
  return (
    <CaseStudy
      kicker="Hardware"
      title="Click-A-Mole"
      subtitle="A sophisticated embedded systems project expanding the classic Whack-A-Mole arcade game into a high-performance mechatronic system with bare-metal hardware control."
      tags={["C/C++", "Arduino Mega 2560", "Embedded Systems", "Mechatronics"]}
      github="https://github.com/AG2048/click-a-mole"
      stats={[
        { num: "60 FPS", label: "Deterministic Frame-Step" },
        { num: "4", label: "FSM Game States" },
        { num: "9", label: "Mole Modules" },
        { num: "25+", label: "Pages of Architecture Docs" },
      ]}
      overview={
        <>
          <p>
            A sophisticated, full-stack embedded systems project expanding the classic arcade
            &ldquo;Whack-A-Mole&rdquo; into a high-performance mechatronic system.
          </p>
          <p>
            Showcases bare-metal hardware control, real-time operating logic, and robust
            object-oriented patterns strictly constrained by microcontroller memory bounds.
          </p>
        </>
      }
      features={[
        {
          title: "Real-Time FSM Engine",
          desc: "C++ engine built on a 4-state finite-state machine with custom memory management, running a deterministic frame-step simulation at 60 FPS.",
        },
        {
          title: "Hardware-Software Co-Design",
          desc: "9 independent mole modules synchronized with a stepper motor, physical buttons, and analog multiplexers.",
        },
        {
          title: "Memory Optimization",
          desc: "Transferred strings to Flash memory and utilised static object pools to eradicate heap fragmentation.",
        },
        {
          title: "Non-Blocking I/O",
          desc: "Event-driven input handling and collision detection polled concurrently with hardware, without stuttering game logic.",
        },
        {
          title: "Engineering Discipline",
          desc: "OOP patterns (inheritance, polymorphism) cut development time ~20%, documented across 25+ pages of architecture docs.",
        },
      ]}
      techStack={["C / C++", "Arduino Mega 2560", "Embedded Systems", "Mechatronics", "Finite State Machine"]}
      shareTitle="Click-A-Mole — embedded systems project by Antoine Tabet"
      next={{ href: "/projects/aspire", label: "Aspire Web Suite" }}
    />
  );
}
