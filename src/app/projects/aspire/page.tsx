import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Aspire Web Suite | Antoine Tabet",
  description: "Full-stack engineering internship — optimised backend queries to cut latency by 35% and shipped 5 production apps.",
  openGraph: {
    title: "Aspire Web Suite | Antoine Tabet",
    description: "Production engineering internship: 35% latency reduction, 5 full-stack apps shipped.",
    url: "https://antoinetabet.vercel.app/projects/aspire",
  },
};

export default function AspirePage() {
  return (
    <CaseStudy
      kicker="Software Engineering Internship"
      title="Aspire Web Suite"
      subtitle="Full-stack engineering for high-growth scale-ups — optimising performance and building internal tooling during a production internship in Beirut."
      tags={["Next.js", "TypeScript", "Supabase", "Tailwind CSS"]}
      github="https://github.com/tabetant/cs-ticket-system"
      stats={[
        { num: "35%", label: "Latency Reduced" },
        { num: "5", label: "Apps Built" },
        { num: "1,000+", label: "Requests / Day" },
        { num: "Production", label: "Deployment" },
      ]}
      overview={
        <>
          <p>
            During my internship at Aspire, the existing infrastructure was struggling to keep
            up with user demand. Response times were sluggish due to unoptimised database
            queries and heavy client-side rendering.
          </p>
          <p>
            Additionally, the team needed rapid prototyping of internal tools to streamline
            operations, requiring versatile full-stack engineering skills across the complete
            product lifecycle.
          </p>
        </>
      }
      featuresTitle="Engineering Solutions"
      features={[
        {
          title: "Performance Optimization",
          desc: "Refactored legacy API endpoints using efficient SQL joins and indexing in Supabase. Implemented caching and SSR in Next.js, resulting in a measurable 35% reduction in backend latency.",
        },
        {
          title: "Internal Tooling",
          desc: "Architected and deployed 5 internal full-stack applications that automated manual data entry workflows and provided real-time analytics dashboards for the operations team.",
        },
      ]}
      techStack={["Next.js (React)", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS"]}
      shareTitle="Aspire Web Suite — internship case study by Antoine Tabet"
      next={{ href: "/projects/askalan", label: "AskAlan" }}
    />
  );
}
