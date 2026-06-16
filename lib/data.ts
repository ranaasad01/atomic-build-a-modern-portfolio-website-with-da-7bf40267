export const APP_NAME = "Alex Morgan";
export const APP_TAGLINE = "Full-Stack Developer & Designer";
export const APP_EMAIL = "hello@alexmorgan.dev";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const navCTA: NavLink = {
  label: "Hire Me",
  href: "#contact",
};

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: "frontend" | "backend" | "tooling" | "design";
}