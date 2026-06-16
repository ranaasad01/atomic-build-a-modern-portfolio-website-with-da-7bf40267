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

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenges: string[];
  outcomes: string[];
  color: string;
  accent: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "luminary-ai",
    title: "Luminary AI",
    tagline: "Intelligent content generation platform",
    description:
      "A full-stack SaaS platform that leverages large language models to help marketing teams generate, refine, and publish content at scale. Built with Next.js, tRPC, and Postgres.",
    longDescription:
      "Luminary AI is a comprehensive SaaS platform designed to revolutionize how marketing teams create and manage content. The platform integrates cutting-edge large language models to provide intelligent content suggestions, automated drafting, and real-time collaboration features. Teams can generate blog posts, social media copy, email campaigns, and more — all within a unified workspace that streamlines the entire content lifecycle from ideation to publication.\n\nThe architecture is built on Next.js 14 with the App Router, leveraging React Server Components for optimal performance. The backend uses tRPC for end-to-end type safety, with a PostgreSQL database managed through Prisma ORM. Real-time collaboration is powered by WebSockets, and the AI layer integrates with OpenAI's GPT-4 API with custom prompt engineering for domain-specific outputs.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Postgres", "Tailwind", "tRPC", "Prisma"],
    image: "https://play-lh.googleusercontent.com/hOqevHtGMfhiHZEuTex2nA-0z4air48anpY-JIiKFMt-V1Ot0OYGn07YDD4CGpiwqP7LF_JWCgkZRt-cKRLD=w240-h480-rw",
    gallery: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-indigo-500/20 to-violet-500/10",
    accent: "indigo",
    challenges: [
      "Designing a prompt engineering system that produces consistent, high-quality outputs across diverse content types and tones.",
      "Implementing real-time collaborative editing without conflicts, using operational transformation algorithms.",
      "Optimizing API costs by building an intelligent caching layer that reuses similar prompt results.",
      "Ensuring GDPR compliance while storing user-generated content and AI interaction logs.",
    ],
    outcomes: [
      "Reduced average content creation time by 68% for beta users across 12 marketing teams.",
      "Achieved 99.9% uptime over the first 6 months post-launch with zero data loss incidents.",
      "Onboarded 200+ paying customers within the first quarter, generating $45k MRR.",
      "Cut OpenAI API costs by 40% through smart caching and prompt optimization strategies.",
    ],
  },
  {
    slug: "vaultpay",
    title: "VaultPay",
    tagline: "Modern crypto payment gateway",
    description:
      "A developer-first payment gateway supporting 12 cryptocurrencies with real-time conversion, webhook events, and a clean dashboard for merchants to track revenue.",
    longDescription:
      "VaultPay is a developer-first cryptocurrency payment gateway that abstracts the complexity of blockchain transactions into a simple, reliable API. Merchants can accept payments in 12 major cryptocurrencies while receiving settlements in their preferred fiat currency, with real-time conversion rates powered by multiple oracle feeds.\n\nThe platform features a comprehensive merchant dashboard built with React and Recharts for revenue analytics, a webhook system for real-time payment notifications, and SDKs for JavaScript, Python, and PHP. The backend is built on Node.js with a microservices architecture, using Redis for caching exchange rates and job queues, and PostgreSQL for transactional data. Smart contract interactions are handled via ethers.js with support for EVM-compatible chains.",
    tags: ["React", "Node.js", "Web3.js", "Redis", "Stripe", "PostgreSQL", "ethers.js"],
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQH3caSERY1a_g/company-logo_200_200/company-logo_200_200/0/1632021736868?e=2147483647&v=beta&t=7K6LsP_IWQzDe-gzkB7cn9zwteFDG2n_J8nINcHqS-Y",
    gallery: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "emerald",
    challenges: [
      "Handling blockchain transaction finality and reorg events without double-counting payments.",
      "Building a reliable exchange rate oracle that aggregates multiple price feeds to prevent manipulation.",
      "Designing an idempotent webhook delivery system that guarantees at-least-once delivery with deduplication.",
      "Navigating regulatory requirements across different jurisdictions for crypto-to-fiat settlements.",
    ],
    outcomes: [
      "Processed over $2.3M in transactions within the first 90 days of public launch.",
      "Achieved sub-200ms API response times at the 99th percentile under peak load.",
      "Maintained zero double-spend incidents across 15,000+ processed transactions.",
      "Developer SDK adopted by 80+ projects within 3 months of release.",
    ],
  },
  {
    slug: "designsync",
    title: "DesignSync",
    tagline: "Real-time collaborative design tool",
    description:
      "A Figma-inspired collaborative canvas where teams can sketch wireframes, annotate mockups, and export assets — all in the browser with live multi-cursor support.",
    longDescription:
      "DesignSync is a browser-based collaborative design tool that brings the power of real-time multi-user editing to wireframing and prototyping workflows. Teams can work simultaneously on the same canvas, seeing each other's cursors and changes in real time, with a full version history and branching system for managing design iterations.\n\nThe canvas engine is built on the HTML5 Canvas API with a custom scene graph renderer optimized for 60fps interactions even with hundreds of elements. Collaboration is powered by a CRDT (Conflict-free Replicated Data Type) implementation over WebSockets, ensuring consistency without locking. The backend uses Supabase for authentication and asset storage, while Zustand manages the complex client-side state. Export functionality supports SVG, PNG, and PDF formats.",
    tags: ["React", "WebSockets", "Canvas API", "Supabase", "Zustand", "CRDT", "TypeScript"],
    image: "https://www.uxpin.com/studio/wp-content/uploads/2024/04/next-js-vs-react.png",
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "from-pink-500/20 to-rose-500/10",
    accent: "pink",
    challenges: [
      "Implementing a CRDT algorithm that handles concurrent edits to nested, hierarchical design elements.",
      "Achieving smooth 60fps canvas rendering while syncing state changes across multiple connected clients.",
      "Building an undo/redo system that works correctly in a collaborative context without stepping on others' changes.",
      "Optimizing WebSocket message payloads to minimize bandwidth usage on large, complex canvases.",
    ],
    outcomes: [
      "Reduced design-to-handoff cycle time by 45% for teams that switched from Figma in user studies.",
      "Sustained 60fps canvas performance with up to 500 simultaneous elements in benchmark tests.",
      "Grew to 1,200 active users within 2 months of beta launch through word-of-mouth alone.",
      "Received a 4.8/5 satisfaction score from 150 surveyed beta users.",
    ],
  },
];
