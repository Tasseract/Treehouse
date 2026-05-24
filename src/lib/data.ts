import {
  AtSign,
  Camera,
  Clapperboard,
  Code2,
  Compass,
  Film,
  GraduationCap,
  Globe,
  Link as LinkIcon,
  Mail,
  Music,
  Sparkles,
  Wand2,
} from "lucide-react";

export const treehouse = {
  name: "Treehouse",
  handle: "@Tasseract",
  signal: "link hub",
  intro: "A compact canopy of exits.",
  location: "Currimao, Ilocos Norte",
};

export type TreehouseLink = {
  title: string;
  href: string;
  label: string;
  icon: typeof LinkIcon;
  accent: "fern" | "sun" | "sky" | "ember" | "ink";
  featured?: boolean;
};

export type TreehouseLinkGroup = {
  title: string;
  links: TreehouseLink[];
};

// Add, remove, or edit links here. The page renders these groups automatically.
export const treehouseGroups: TreehouseLinkGroup[] = [
  {
    title: "Main Branches",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/Tasseract",
        label: "Code, experiments, repositories",
        icon: Code2,
        accent: "ink",
        featured: true,
      },
      {
        title: "Email",
        href: "mailto:jhalentroyjose@gmail.com",
        label: "jhalentroyjose@gmail.com",
        icon: Mail,
        accent: "sun",
        featured: true,
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/",
        label: "Professional profile",
        icon: Globe,
        accent: "sky",
      },
    ],
  },
  {
    title: "Social Roots",
    links: [
      {
        title: "Instagram",
        href: "https://www.instagram.com/",
        label: "Photos and visual fragments",
        icon: Camera,
        accent: "ember",
      },
      {
        title: "YouTube",
        href: "https://www.youtube.com/",
        label: "Video work and uploads",
        icon: Film,
        accent: "fern",
      },
      {
        title: "Contact Card",
        href: "mailto:jhalentroyjose@gmail.com",
        label: "Fastest direct route",
        icon: AtSign,
        accent: "sky",
      },
    ],
  },
  {
    title: "Wayfinding",
    links: [
      {
        title: "Portfolio Archive",
        href: "https://github.com/Tasseract",
        label: "Collected work",
        icon: Compass,
        accent: "fern",
      },
      {
        title: "Current Drop",
        href: "https://iyvix.com",
        label: "Live project",
        icon: Sparkles,
        accent: "sun",
      },
    ],
  },
];

export const footnotes = ["quiet", "static", "editable in data.ts"];

// Legacy exports are kept so older, unused portfolio components still type-check.
export const profile = {
  name: "Treehouse",
  shortName: "Treehouse",
  role: "Link hub",
  school: "Static site",
  title: "Treehouse — a link hub for the places I share most.",
  badge: "Treehouse",
  tagline: "A compact canopy of exits.",
  about: {
    headline: "Links only.",
    paragraphs: ["Treehouse is a static link hub edited from src/lib/data.ts."],
  },
  location: treehouse.location,
  email: "jhalentroyjose@gmail.com",
  phone: "+63 960 336 8917",
  github: "https://github.com/Tasseract",
  githubHandle: "Tasseract",
  age: 21,
  languages: ["English", "Filipino", "Ilocano"],
};

export type LinkItem = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  accent?: "primary" | "secondary";
};

export const links: LinkItem[] = treehouseGroups.flatMap((group) =>
  group.links.map((link, index) => ({
    title: link.title,
    description: link.label,
    href: link.href,
    external: link.href.startsWith("http"),
    accent: index % 2 === 0 ? "primary" : "secondary",
  })),
);

export type Pillar = {
  title: string;
  caption: string;
  description: string;
  icon: typeof Music;
  accent: "primary" | "secondary";
};

export const pillars: Pillar[] = [
  {
    title: "Links",
    caption: "Treehouse",
    description: "Everything points outward.",
    icon: Music,
    accent: "primary",
  },
  {
    title: "Static",
    caption: "Data-driven",
    description: "Edit src/lib/data.ts and the hub updates.",
    icon: Wand2,
    accent: "secondary",
  },
  {
    title: "Visual",
    caption: "Outrageous",
    description: "A link hub with a little architectural nerve.",
    icon: Camera,
    accent: "primary",
  },
  {
    title: "Focused",
    caption: "No pitch",
    description: "Just links.",
    icon: Clapperboard,
    accent: "secondary",
  },
  {
    title: "Media",
    caption: "Optional",
    description: "Keep or remove any branch.",
    icon: Film,
    accent: "primary",
  },
  {
    title: "Code",
    caption: "Editable",
    description: "The source of truth lives in data.ts.",
    icon: Code2,
    accent: "secondary",
  },
  {
    title: "Simple",
    caption: "Static",
    description: "No database, no CMS.",
    icon: GraduationCap,
    accent: "primary",
  },
];

export const sectionHeadings = {
  craft: { eyebrow: "Treehouse", title: "Branches.", description: "Links." },
  tech: { eyebrow: "Treehouse", title: "Roots.", description: "Static." },
  projects: { eyebrow: "Treehouse", title: "Exits." },
  videos: { eyebrow: "Treehouse", title: "Signals.", description: "Media." },
};

export type SkillGroup = {
  title: string;
  skills: { name: string; level: 1 | 2 | 3 | 4 }[];
};

export const skillGroups: SkillGroup[] = [
  { title: "System", skills: [{ name: "Static links", level: 4 }] },
];

export type Project = {
  title: string;
  caption: string;
  description: string;
  href: string;
  external: boolean;
  cta: string;
};

export type Video = {
  title: string;
  description: string;
  url: string;
};

export const projects: Project[] = treehouseGroups.flatMap((group) =>
  group.links.map((link) => ({
    title: link.title,
    caption: group.title,
    description: link.label,
    href: link.href,
    external: true,
    cta: link.href,
  })),
);

export const videos: Video[] = [];
