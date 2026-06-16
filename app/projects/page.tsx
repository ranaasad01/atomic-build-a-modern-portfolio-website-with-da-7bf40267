"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Code2, ArrowRight, Tag, ArrowLeft } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const projectDetails = [
  {
    slug: "luminary-ai",
    title: "Luminary AI",
    tagline: "Intelligent content generation platform",
    description:
      "A full-stack SaaS platform that leverages large language models to help marketing teams generate, refine, and publish content at scale. Built with Next.js, tRPC, and Postgres.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Postgres", "Tailwind"],
    image:
      "https://play-lh.googleusercontent.com/hOqevHtGMfhiHZEuTex2nA-0z4air48anpY-JIiKFMt-V1Ot0OYGn07YDD4CGpiwqP7LF_JWCgkZRt-cKRLD=w240-h480-rw",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-indigo-500/20 to-violet-500/10",
    accent: "indigo",
    accentHex: "#6366f1",
  },
  {
    slug: "vaultpay",
    title: "VaultPay",
    tagline: "Modern crypto payment gateway",
    description:
      "A developer-first payment gateway supporting 12 cryptocurrencies with real-time conversion, webhook events, and a clean dashboard for merchants to track revenue.",
    tags: ["React", "Node.js", "Web3.js", "Redis", "Stripe"],
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQH3caSERY1a_g/company-logo_200_200/company-logo_200_200/0/1632021736868?e=2147483647&v=beta&t=7K6LsP_IWQzDe-gzkB7cn9zwteFDG2n_J8nINcHqS-Y",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "emerald",
    accentHex: "#10b981",
  },
  {
    slug: "designsync",
    title: "DesignSync",
    tagline: "Real-time collaborative design tool",
    description:
      "A Figma-inspired collaborative canvas where teams can sketch wireframes, annotate mockups, and export assets — all in the browser with live multi-cursor support.",
    tags: ["React", "WebSockets", "Canvas API", "Supabase", "Zustand"],
    image:
      "https://www.uxpin.com/studio/wp-content/uploads/2024/04/next-js-vs-react.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-pink-500/20 to-rose-500/10",
    accent: "pink",
    accentHex: "#ec4899",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    tagline: "Kanban-style project management app",
    description:
      "A lightweight project management tool with drag-and-drop Kanban boards, time tracking, and team collaboration features built for remote-first teams.",
    tags: ["Vue.js", "Firebase", "Tailwind", "Pinia"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop&q=60",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "from-amber-500/20 to-orange-500/10",
    accent: "amber",
    accentHex: "#f59e0b",
  },
  {
    slug: "healthtrack",
    title: "HealthTrack",
    tagline: "Personal wellness & fitness tracker",
    description:
      "A mobile-first wellness app that tracks workouts, nutrition, sleep, and mood with beautiful charts and AI-powered insights to help users reach their health goals.",
    tags: ["React Native", "Expo", "GraphQL", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&auto=format&fit=crop&q=60",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "from-cyan-500/20 to-sky-500/10",
    accent: "cyan",
    accentHex: "#06b6d4",
  },
  {
    slug: "codelab",
    title: "CodeLab",
    tagline: "Browser-based coding environment",
    description:
      "An in-browser IDE supporting 20+ languages with real-time collaboration, AI code completion, and instant preview — perfect for interviews and pair programming sessions.",
    tags: ["TypeScript", "Monaco Editor", "WebAssembly", "Docker"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "from-violet-500/20 to-purple-500/10",
    accent: "violet",
    accentHex: "#8b5cf6",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Back to home */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
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

        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wider uppercase">
              <Tag className="w-3 h-3" />
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of products, tools, and experiments I&apos;ve
            built — from SaaS platforms to open-source libraries. Each project
            reflects a problem worth solving.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projectDetails.map((project) => (
            <motion.div
              key={project.slug}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-white/15 transition-all duration-300"
              style={{
                boxShadow: `0 0 0 0 ${project.accentHex}00`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px ${project.accentHex}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${project.accentHex}00`;
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60";
                  }}
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/80 backdrop-blur-sm text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 mb-3 font-medium">
                  {project.tagline}
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/50 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:border-white/25 text-white/60 hover:text-white text-sm font-medium transition-all duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:border-white/25 text-white/60 hover:text-white text-sm font-medium transition-all duration-200"
                      title="GitHub"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            Interested in working together?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-500/20"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
