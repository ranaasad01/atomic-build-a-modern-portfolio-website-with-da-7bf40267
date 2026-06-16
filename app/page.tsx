"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ExternalLink, Code2, Layers, Sparkles, Star, CheckCircle, Download, Send, Terminal, Globe, Smartphone, Database, PenTool as Figma, Zap } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, APP_EMAIL } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline Data ────────────────────────────────────────────────────────────

const projects = [
  {
    slug: "luminary-ai",
    title: "Luminary AI",
    tagline: "Intelligent content generation platform",
    description:
      "A full-stack SaaS platform that leverages large language models to help marketing teams generate, refine, and publish content at scale. Built with Next.js, tRPC, and Postgres.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Postgres", "Tailwind"],
    image: "https://play-lh.googleusercontent.com/hOqevHtGMfhiHZEuTex2nA-0z4air48anpY-JIiKFMt-V1Ot0OYGn07YDD4CGpiwqP7LF_JWCgkZRt-cKRLD=w240-h480-rw",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-indigo-500/20 to-violet-500/10",
    accent: "indigo",
  },
  {
    slug: "vaultpay",
    title: "VaultPay",
    tagline: "Modern crypto payment gateway",
    description:
      "A developer-first payment gateway supporting 12 cryptocurrencies with real-time conversion, webhook events, and a clean dashboard for merchants to track revenue.",
    tags: ["React", "Node.js", "Web3.js", "Redis", "Stripe"],
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQH3caSERY1a_g/company-logo_200_200/company-logo_200_200/0/1632021736868?e=2147483647&v=beta&t=7K6LsP_IWQzDe-gzkB7cn9zwteFDG2n_J8nINcHqS-Y",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "emerald",
  },
  {
    slug: "designsync",
    title: "DesignSync",
    tagline: "Real-time collaborative design tool",
    description:
      "A Figma-inspired collaborative canvas where teams can sketch wireframes, annotate mockups, and export assets — all in the browser with live multi-cursor support.",
    tags: ["React", "WebSockets", "Canvas API", "Supabase", "Zustand"],
    image: "https://www.uxpin.com/studio/wp-content/uploads/2024/04/next-js-vs-react.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-pink-500/20 to-rose-500/10",
    accent: "pink",
  },
];

const skills = [
  { name: "React & Next.js", level: 95, category: "frontend", icon: Globe },
  { name: "TypeScript", level: 92, category: "frontend", icon: Code2 },
  { name: "Node.js & Express", level: 88, category: "backend", icon: Terminal },
  { name: "PostgreSQL & Redis", level: 82, category: "backend", icon: Database },
  { name: "UI/UX Design", level: 78, category: "design", icon: Figma },
  { name: "React Native", level: 75, category: "frontend", icon: Smartphone },
  { name: "Docker & CI/CD", level: 80, category: "tooling", icon: Layers },
  { name: "Performance & SEO", level: 85, category: "tooling", icon: Zap },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Luminary Labs",
    avatar: "https://miro.medium.com/0*ZNfVl9qpPv4BLPo-.png",
    text: "Alex delivered our platform three weeks ahead of schedule. The code quality was exceptional — clean architecture, thorough tests, and documentation that actually makes sense.",
    stars: 5,
  },
  {
    name: "Marcus Webb",
    role: "Founder of VaultPay",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6e/JMarcus_Webb.JPG",
    text: "Working with Alex felt like having a co-founder who could execute. He understood the product vision immediately and translated it into a beautiful, performant experience.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Lead at DesignSync",
    avatar: "https://media.licdn.com/dms/image/v2/D5622AQE3NpM1FP01Yg/feedshare-shrink_800/B56Zf4pvKcGUAg-/0/1752223383746?e=2147483647&v=beta&t=C11dC6M36dpAKpcbBRMtusPrnkgE-cNJfHc93ZNpFoQ",
    text: "The real-time collaboration features Alex built are genuinely impressive. Users constantly tell us the app feels snappy and intuitive. Couldn't be happier.",
    stars: 5,
  },
];

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "End-to-end web apps built with Next.js, React, and TypeScript. From MVPs to enterprise-grade platforms with auth, payments, and real-time features.",
    highlights: ["Next.js App Router", "REST & GraphQL APIs", "Auth & Payments"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native that feel native on both iOS and Android. Shared codebase, platform-specific polish.",
    highlights: ["React Native", "Expo", "Push Notifications"],
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Scalable component libraries and design tokens that keep your product consistent as it grows. Storybook documentation included.",
    highlights: ["Figma to Code", "Storybook", "Accessibility"],
  },
  {
    icon: Zap,
    title: "Performance Audits",
    description:
      "Deep-dive audits that identify bottlenecks in your existing app. Lighthouse scores improved, Core Web Vitals optimized, bundle sizes slashed.",
    highlights: ["Core Web Vitals", "Bundle Analysis", "SEO"],
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Open Source Repos" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
      <Sparkles size={11} />
      {children}
    </div>
  );
}

function SkillBar({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const Icon = skill.icon;
  const categoryColors: Record<string, string> = {
    frontend: "bg-indigo-500",
    backend: "bg-emerald-500",
    design: "bg-pink-500",
    tooling: "bg-amber-500",
  };
  const barColor = categoryColors[skill.category] ?? "bg-indigo-500";

  return (
    <motion.div
      variants={fadeInUp}
      className="group p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white/80 transition-colors">
            <Icon size={15} />
          </div>
          <span className="text-sm font-medium text-white/80">{skill.name}</span>
        </div>
        <span className="text-xs text-white/30 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.07, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const accentMap: Record<string, string> = {
    indigo: "group-hover:border-indigo-500/40 shadow-indigo-500/10",
    emerald: "group-hover:border-emerald-500/40 shadow-emerald-500/10",
    pink: "group-hover:border-pink-500/40 shadow-pink-500/10",
  };
  const tagAccentMap: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };
  const borderClass = accentMap[project.accent] ?? accentMap["indigo"];
  const tagClass = tagAccentMap[project.accent] ?? tagAccentMap["indigo"];

  return (
    <motion.div
      variants={scaleIn}
      className={`group relative rounded-2xl bg-white/[0.03] border border-white/8 hover:shadow-2xl transition-all duration-500 overflow-hidden ${borderClass}`}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.color}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-indigo-400/80 mb-3 font-medium">{project.tagline}</p>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {(project.tags ?? []).map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium ${tagClass}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              <ExternalLink size={13} />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              <Github size={13} />
              Source
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <main className="bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {APP_NAME}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-white/50 font-light mb-4 tracking-wide"
          >
            {APP_TAGLINE}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I craft high-performance web applications and intuitive interfaces that help
            startups and scale-ups ship faster, delight users, and grow revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all duration-200"
              whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(99,102,241,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-indigo-500/20 border border-white/5 hover:border-indigo-500/30 flex items-center justify-center text-white/40 hover:text-indigo-400 transition-all duration-200"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5603AQE-oMdEA4-lZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516522176575?e=2147483647&v=beta&t=NNza9NbD-soKscrNPIBTk-qTQ2z583NAZI6yUgYwXZ0"
                  alt="Alex Morgan — Full-Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                      AM
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{APP_NAME}</div>
                      <div className="text-xs text-white/40">{APP_TAGLINE}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-indigo-500/5 rounded-3xl blur-2xl -z-10" />
            </motion.div>

            {/* Text side */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <SectionLabel>About Me</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Building products people{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    actually love
                  </span>
                </h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-white/50 leading-relaxed">
                I'm a full-stack developer and designer based in San Francisco with over 5
                years of experience turning complex problems into elegant digital solutions.
                I've worked with early-stage startups, Series B companies, and everything
                in between.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-white/50 leading-relaxed">
                My sweet spot is the intersection of engineering and design — I care deeply
                about both the code quality under the hood and the pixel-perfect experience
                users see. When I'm not shipping features, I'm contributing to open source
                or writing about web performance on my blog.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Clean, maintainable code",
                  "Pixel-perfect UI",
                  "Performance-first mindset",
                  "Clear communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle size={14} className="text-indigo-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-2">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all duration-200"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Work With Me
                  <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={15} />
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <SectionLabel>Skills & Expertise</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Tools I work with
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/40 max-w-xl mx-auto text-base"
            >
              A curated set of technologies I've used in production across dozens of
              projects — chosen for reliability, developer experience, and performance.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>

          {/* Services row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {(service.highlights ?? []).map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-white/40">
                        <CheckCircle size={11} className="text-indigo-400/70 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <SectionLabel>Featured Projects</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Things I've built
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/40 max-w-xl mx-auto text-base"
            >
              A selection of recent projects spanning SaaS platforms, developer tools, and
              consumer apps — each one shipped with care and attention to detail.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={16} />
              See more on GitHub
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <SectionLabel>Testimonials</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              What clients say
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                className="group p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-white/55 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/35">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Let's build something great
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/40 max-w-xl mx-auto text-base"
            >
              Have a project in mind or just want to chat? I'm always open to interesting
              conversations and new opportunities. Reach out — I respond within 24 hours.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-5">
                <h3 className="text-base font-semibold text-white">Contact Info</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${APP_EMAIL}`}
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail size={15} />
                    </div>
                    <span>{APP_EMAIL}</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-indigo-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0">
                      <Github size={15} />
                    </div>
                    <span>github.com/alexmorgan</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-indigo-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0">
                      <Linkedin size={15} />
                    </div>
                    <span>linkedin.com/in/alexmorgan</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-300">
                  <Sparkles size={14} />
                  Currently available
                </div>
                <p className="text-xs text-white/40 leading-relaxed">
                  I'm open to freelance projects, contract work, and full-time
                  opportunities. My typical response time is under 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleFormSubmit}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleFormChange}
                      placeholder="Jane Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleFormChange}
                      placeholder="jane@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all duration-200"
                  whileHover={formStatus === "idle" ? { scale: 1.02 } : {}}
                  whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
                >
                  {formStatus === "idle" && (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                  {formStatus === "sending" && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending…
                    </>
                  )}
                  {formStatus === "sent" && (
                    <>
                      <CheckCircle size={15} />
                      Message Sent!
                    </>
                  )}
                </motion.button>

                {formStatus === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-emerald-400"
                  >
                    Thanks! I'll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}