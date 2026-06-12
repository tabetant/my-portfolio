import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "AskAlan | Antoine Tabet",
  description: "Production retrieval-augmented AI assistant serving University of Toronto engineering students, re-architected for scale across a multi-database backend.",
  openGraph: {
    title: "AskAlan | Antoine Tabet",
    description: "Production retrieval-augmented AI assistant serving University of Toronto engineering students, re-architected for scale across a multi-database backend.",
    url: "https://antoinetabet.com/projects/askalan",
  },
};

export default function AskAlanPage() {
  return (
    <CaseStudy
      kicker="Production System"
      title="AskAlan"
      subtitle="A production AI teaching assistant that gives University of Toronto engineering students trusted, instructor-approved access to their own course material — deployed across 19 courses and answering thousands of student questions."
      tags={["Python", "FastAPI", "PostgreSQL", "Anthropic Claude", "RAG"]}
      badge="Production system · University of Toronto"
      stats={[
        { num: "19", label: "Courses in Production" },
        { num: "118K", label: "Document Chunks Indexed" },
        { num: "~40%", label: "Retrieval Latency Reduced" },
        { num: "8K+", label: "Real Queries Validated" },
      ]}
      overview={
        <>
          <p>
            AskAlan is a retrieval-augmented AI assistant that gives University of Toronto
            engineering students trusted access to their instructors&apos; own course material —
            lectures, exercises, past exams, and announcements — instead of the generic,
            unsourced answers public chatbots give. It began as a capstone project and is now a
            production system maintained by a faculty-led team, deployed across 19 courses.
          </p>
          <p>
            I led the consolidation of its retrieval stack onto Postgres. The first phase
            migrated the keyword-search layer off Elasticsearch behind a behavior-preserving
            adapter, mirroring roughly 118,000 document chunks across all 19 courses and
            validating ranking parity against more than 8,000 real student queries before any
            cutover. It cut keyword-search latency by about 40% and removed one of three
            separate datastores from the operational footprint, with dual-read/dual-write
            safety and instant rollback throughout.
          </p>
          <p>
            Beyond the migration I worked across the stack: rebuilding multimodal retrieval so
            exam and image content surfaces correctly, instrumenting end-to-end token and cost
            tracking across five model providers, cutting streaming latency about 35%, and
            hardening the live deployment&apos;s secret handling. The throughline is shipping
            reliable changes inside a real system with real users and real constraints — and
            leaving it measurably faster and cheaper to run.
          </p>
        </>
      }
      features={[
        {
          title: "Zero-Downtime Search Migration",
          desc: "Re-architected the retrieval backbone from Elasticsearch onto Postgres behind a behavior-preserving adapter, with dual-read/dual-write validation and one-flag rollback, so live courses saw no disruption.",
        },
        {
          title: "Validated at Production Scale",
          desc: "Replayed 8,000+ real student queries through both engines to prove ranking parity before cutover, and cut keyword-search latency roughly 40%.",
        },
        {
          title: "Multimodal Retrieval",
          desc: "Rebuilt the pipeline so lecture text and exam-image content surface together, re-embedding thousands of page images and fixing an embedding defect that was burying real results.",
        },
        {
          title: "Full-Stack Cost Observability",
          desc: "Instrumented every model and embedding call across five providers for per-course, per-feature cost attribution, surfaced in live faculty and developer dashboards.",
        },
        {
          title: "Streaming Latency Optimization",
          desc: "Reordered the response-streaming path to cut perceived latency about 35%, improving time-to-first-token on every conversation.",
        },
      ]}
      techStack={[
        "Python",
        "FastAPI",
        "PostgreSQL",
        "ParadeDB / pgvector",
        "Elasticsearch",
        "Pinecone",
        "Anthropic Claude",
        "Voyage AI",
        "Docker",
      ]}
      shareTitle="AskAlan — production AI teaching assistant by Antoine Tabet"
      next={{ href: "/projects/wealtheasy", label: "WealthEasy" }}
    />
  );
}
