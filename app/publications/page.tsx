"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, Tag, Calendar, Users, ArrowLeft } from 'lucide-react';
import Link from "next/link";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";

// ─── Publication Data ────────────────────────────────────────────────────────

interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  doiUrl?: string;
  featured: boolean;
}

const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Scalable Real-Time Collaboration in Browser-Based Design Tools",
    authors: ["Alex Morgan", "Sarah Chen", "David Liu"],
    venue: "ACM Conference on Human Factors in Computing Systems (CHI)",
    year: 2024,
    abstract:
      "We present a novel architecture for enabling real-time multi-user collaboration in browser-based design tools. Our approach leverages Conflict-free Replicated Data Types (CRDTs) combined with a WebSocket relay layer to achieve sub-50ms synchronization latency across geographically distributed users. We evaluate our system on a production deployment serving over 10,000 concurrent users and demonstrate significant improvements over existing operational transform approaches.",
    tags: ["CRDTs", "WebSockets", "Collaboration", "HCI", "Real-Time Systems"],
    pdfUrl: "https://example.com/papers/realtime-collab.pdf",
    doiUrl: "https://doi.org/10.1145/example.1234567",
    featured: true,
  },
  {
    id: "pub-2",
    title: "Performance Optimization Strategies for Large-Scale Next.js Applications",
    authors: ["Alex Morgan", "Marcus Webb"],
    venue: "IEEE Software Engineering Conference",
    year: 2024,
    abstract:
      "Modern web applications built with Next.js face unique performance challenges at scale. This paper systematically evaluates optimization strategies including incremental static regeneration, edge caching, and selective hydration. Through empirical analysis of three production applications serving millions of users, we identify key bottlenecks and propose a decision framework for engineers to prioritize optimization efforts.",
    tags: ["Next.js", "Performance", "Web Development", "Caching", "SSR"],
    pdfUrl: "https://example.com/papers/nextjs-perf.pdf",
    doiUrl: "https://doi.org/10.1109/example.5678901",
    featured: true,
  },
  {
    id: "pub-3",
    title: "Designing Accessible AI-Powered Interfaces: A User Study",
    authors: ["Alex Morgan", "Priya Patel", "James O'Brien"],
    venue: "ACM ASSETS — Assistive Technology",
    year: 2023,
    abstract:
      "As AI-generated content becomes ubiquitous in web interfaces, ensuring accessibility for users with disabilities presents new challenges. We conducted a mixed-methods study with 48 participants across three disability groups to evaluate how AI-powered autocomplete, summarization, and generation features affect usability. Our findings reveal critical gaps in current WCAG guidelines and propose five new heuristics for accessible AI interfaces.",
    tags: ["Accessibility", "AI", "UX Research", "WCAG", "Inclusive Design"],
    pdfUrl: "https://example.com/papers/accessible-ai.pdf",
    doiUrl: "https://doi.org/10.1145/example.9876543",
    featured: false,
  },
  {
    id: "pub-4",
    title: "Type-Safe API Design Patterns with TypeScript and tRPC",
    authors: ["Alex Morgan"],
    venue: "Journal of Web Engineering",
    year: 2023,
    abstract:
      "End-to-end type safety between client and server remains an unsolved ergonomics problem in web development. This paper surveys existing approaches — REST with OpenAPI, GraphQL, and gRPC — and introduces a comparative analysis with tRPC, a TypeScript-first RPC framework. We present design patterns for building maintainable, type-safe APIs and measure developer productivity gains through a controlled experiment with 30 professional engineers.",
    tags: ["TypeScript", "tRPC", "API Design", "Type Safety", "Developer Experience"],
    pdfUrl: "https://example.com/papers/typesafe-api.pdf",
    doiUrl: "https://doi.org/10.1007/example.2468013",
    featured: false,
  },
  {
    id: "pub-5",
    title: "Edge Computing Patterns for Globally Distributed Web Applications",
    authors: ["Alex Morgan", "Yuki Tanaka", "Carlos Rivera"],
    venue: "USENIX Web Technologies Symposium",
    year: 2023,
    abstract:
      "Edge computing platforms such as Cloudflare Workers and Vercel Edge Functions enable computation at network edges, dramatically reducing latency for global users. This paper characterizes workload patterns best suited for edge deployment, introduces a taxonomy of edge computing use cases, and provides empirical benchmarks comparing edge versus traditional serverless architectures across 12 geographic regions.",
    tags: ["Edge Computing", "Serverless", "CDN", "Latency", "Cloud"],
    pdfUrl: "https://example.com/papers/edge-computing.pdf",
    doiUrl: "https://doi.org/10.5555/example.1357924",
    featured: false,
  },
  {
    id: "pub-6",
    title: "State Management Complexity in Modern React Applications",
    authors: ["Alex Morgan", "Sarah Chen"],
    venue: "Workshop on Reactive and Event-Based Languages & Systems (REBLS)",
    year: 2022,
    abstract:
      "The React ecosystem offers a proliferation of state management solutions — Redux, Zustand, Jotai, Recoil, and more. This paper presents a complexity analysis framework for evaluating state management libraries across dimensions of boilerplate, debuggability, performance, and team scalability. We apply the framework to five popular libraries using three representative application archetypes.",
    tags: ["React", "State Management", "Redux", "Zustand", "Frontend Architecture"],
    pdfUrl: "https://example.com/papers/state-mgmt.pdf",
    doiUrl: "https://doi.org/10.1145/example.3691234",
    featured: false,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function PublicationCard({
  pub,
  featured = false,
}: {
  pub: Publication;
  featured?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.05] ${
        featured ? "p-8" : "p-6"
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {featured && (
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <BookOpen className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Title */}
      <h3
        className={`font-semibold text-white leading-snug mb-3 group-hover:text-indigo-200 transition-colors ${
          featured ? "text-xl" : "text-base"
        }`}
      >
        {pub.title}
      </h3>

      {/* Authors */}
      <div className="flex items-start gap-2 mb-2">
        <Users className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
        <p className="text-sm text-white/60">{pub.authors.join(", ")}</p>
      </div>

      {/* Venue + Year */}
      <div className="flex items-start gap-2 mb-4">
        <Calendar className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
        <p className="text-sm text-white/50">
          <span className="text-white/70">{pub.venue}</span>
          {" · "}
          <span className="text-indigo-400 font-medium">{pub.year}</span>
        </p>
      </div>

      {/* Abstract */}
      <p className="text-sm text-white/50 leading-relaxed mb-5">
        {featured ? truncate(pub.abstract, 320) : truncate(pub.abstract, 180)}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {pub.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/50 text-xs"
          >
            <Tag className="w-2.5 h-2.5" />
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        {pub.pdfUrl && (
          <a
            href={pub.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white text-xs font-medium transition-colors duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            PDF
          </a>
        )}
        {pub.doiUrl && (
          <a
            href={pub.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-xs font-medium transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            DOI
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PublicationsPage() {
  const featuredPubs = publications.filter((p) => p.featured);
  const allPubs = publications.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Back link */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-indigo-400 tracking-wide uppercase">
              Research & Writing
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Publications
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/55 max-w-2xl leading-relaxed"
          >
            Peer-reviewed papers, conference proceedings, and technical writing on
            web engineering, human-computer interaction, and software architecture.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 mt-8"
          >
            {[
              { label: "Total Publications", value: publications.length },
              { label: "Featured Works", value: featuredPubs.length },
              { label: "Years Active", value: "2022–2024" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/40 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Featured publications */}
        {featuredPubs.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-semibold text-white mb-2"
              >
                Featured Publications
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-sm text-white/40 mb-8"
              >
                Highlighted research with significant impact or recognition.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {featuredPubs.map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} featured />
                ))}
              </motion.div>
            </motion.div>
          </section>
        )}

        {/* All other publications */}
        {allPubs.length > 0 && (
          <section>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-semibold text-white mb-2"
              >
                All Publications
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-sm text-white/40 mb-8"
              >
                Complete list of papers, workshops, and technical articles.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-5"
              >
                {allPubs.map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))}
              </motion.div>
            </motion.div>
          </section>
        )}

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/8 bg-white/[0.03]">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <p className="text-white/60 text-sm max-w-sm">
              Interested in collaborating on research or have questions about my work?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
            >
              Get in Touch
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
