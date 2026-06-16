"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, CheckCircle, AlertTriangle, TrendingUp, Images } from 'lucide-react';
import { projectDetails, ProjectDetail } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn, fadeIn } from "@/lib/motion";
import { use } from "react";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project: ProjectDetail | undefined = projectDetails.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  const accentMap: Record<string, string> = {
    indigo: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/25",
    emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/25",
    pink: "bg-pink-600 hover:bg-pink-500 shadow-pink-500/25",
  };

  const accentTextMap: Record<string, string> = {
    indigo: "text-indigo-400",
    emerald: "text-emerald-400",
    pink: "text-pink-400",
  };

  const accentBorderMap: Record<string, string> = {
    indigo: "border-indigo-500/30",
    emerald: "border-emerald-500/30",
    pink: "border-pink-500/30",
  };

  const accentBgMap: Record<string, string> = {
    indigo: "bg-indigo-500/10",
    emerald: "bg-emerald-500/10",
    pink: "bg-pink-500/10",
  };

  const accentClass = accentMap[project.accent] ?? accentMap.indigo;
  const accentText = accentTextMap[project.accent] ?? accentTextMap.indigo;
  const accentBorder = accentBorderMap[project.accent] ?? accentBorderMap.indigo;
  const accentBg = accentBgMap[project.accent] ?? accentBgMap.indigo;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 group text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Projects
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Title & Meta */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${accentBorder} ${accentBg} ${accentText}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className={`text-xl sm:text-2xl font-medium ${accentText}`}>
              {project.tagline}
            </p>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* CTA Links */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 shadow-lg ${accentClass}`}
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white/80 font-medium border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              >
                <Code2 className="w-4 h-4" />
                View Code
              </a>
            )}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={scaleIn}
            className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.color} aspect-video`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${accentBg} ${accentBorder} border flex items-center justify-center`}>
              <ExternalLink className={`w-4 h-4 ${accentText}`} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">About this project</h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className={`h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8`} />
            <div className="space-y-4">
              {project.longDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-white/70 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Challenges & Outcomes Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Challenges</h2>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex gap-3 items-start"
                  >
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </span>
                    <p className="text-white/65 leading-relaxed text-sm">{challenge}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Outcomes</h2>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
              <ul className="space-y-4">
                {project.outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle className="mt-0.5 flex-shrink-0 w-5 h-5 text-emerald-400" />
                    <p className="text-white/65 leading-relaxed text-sm">{outcome}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${accentBg} ${accentBorder} border flex items-center justify-center`}>
                <Images className={`w-4 h-4 ${accentText}`} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Gallery</h2>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((imgUrl, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 sm:p-14 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 pointer-events-none`} />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Explore More Projects</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Curious about what else I've built? Head back to the projects page to see the full collection.
            </p>
            <Link
              href="/projects"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg ${accentClass}`}
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
