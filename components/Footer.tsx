"use client";

import { motion } from "framer-motion";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navLinks, APP_NAME, APP_TAGLINE, APP_EMAIL } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: `mailto:${APP_EMAIL}` },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/25">
                AM
              </span>
              <span className="font-semibold text-white">{APP_NAME}</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {APP_TAGLINE}. Building thoughtful digital products that make a difference.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/5 hover:border-indigo-500/30 flex items-center justify-center text-white/40 hover:text-indigo-400 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest">
              Get In Touch
            </h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Open to freelance projects, full-time roles, and interesting collaborations.
            </p>
            <a
              href={`mailto:${APP_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group"
            >
              <Mail size={14} />
              <span className="group-hover:underline underline-offset-2">{APP_EMAIL}</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {APP_NAME}. Crafted with care.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-indigo-400 transition-colors duration-200 group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-md bg-white/5 group-hover:bg-indigo-500/20 border border-white/5 group-hover:border-indigo-500/30 flex items-center justify-center transition-all duration-200">
              <ArrowUp size={11} />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}