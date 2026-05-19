import {
  Camera,
  Clapperboard,
  Code2,
  Film,
  GraduationCap,
  Music,
  Wand2,
} from "lucide-react";

export const profile = {
  name: "Jhalen Troy",
  shortName: "Troy",
  role: "BS Information Technology",
  school: "Mariano Marcos State University",
  badge: "Open to On-The-Job Training, can do summer job as well",
  tagline:
    "Information-technology student crafting at the intersection of code, sound, and image.",
  about: {
    headline: "A maker, across mediums.",
    paragraphs: [
      "I'm a Bachelor of Science in Information Technology student at Mariano Marcos State University — but I've never thought of myself as \"just a coder.\"",
      "I work across software development, music composition, animation, photography and film — chasing the same thing in each: a feeling of considered craft. I'm formally trained in modern, AI-augmented workflows, and I treat AI as a multiplier on what I can do unaided.",
      "I'm looking for an On-The-Job Training opportunity where I can contribute meaningfully and keep growing.",
    ],
  },
  location: "Currimao, Ilocos Norte · Philippines",
  email: "jhalentroyjose@gmail.com",
  phone: "+63 960 336 8917",
  github: "https://github.com/Tasseract",
  githubHandle: "Tasseract",
  age: 21,
  languages: ["English", "Filipino", "Ilocano"],
};

export type Pillar = {
  title: string;
  caption: string;
  description: string;
  icon: typeof Music;
  accent: "primary" | "secondary";
};

export const pillars: Pillar[] = [
  {
    title: "Pianist & Composer",
    caption: "Logic Pro",
    description:
      "Original scores and arrangements — produced end-to-end inside Logic Pro.",
    icon: Music,
    accent: "primary",
  },
  {
    title: "Animator & 3D Designer",
    caption: "Blender",
    description:
      "Modeling, procedural textures and animation.",
    icon: Wand2,
    accent: "secondary",
  },
  {
    title: "Photographer",
    caption: "Stills",
    description:
      "Light, geometry, patience. Crafting a single frame that lingers.",
    icon: Camera,
    accent: "primary",
  },
  {
    title: "Cinematographer",
    caption: "Motion picture",
    description:
      "Composition, blocking and color — telling stories with the camera as a voice.",
    icon: Clapperboard,
    accent: "secondary",
  },
  {
    title: "Video Editor",
    caption: "Post-production",
    description:
      "Pacing, rhythm and continuity — shaping a story long after the cameras stop.",
    icon: Film,
    accent: "primary",
  },
  {
    title: "Coder & Programmer",
    caption: "github.com/Tasseract",
    description:
      "Building software that feels considered — across web, app, and the systems beneath them.",
    icon: Code2,
    accent: "secondary",
  },
  {
    title: "IT Student",
    caption: "MMSU · Continuous learning",
    description:
      "Studying networks, systems and modern AI-augmented workflows as a discipline.",
    icon: GraduationCap,
    accent: "primary",
  },
];

export type SkillGroup = {
  title: string;
  skills: { name: string; level: 1 | 2 | 3 | 4 }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 3 },
      { name: "Swift", level: 3 },
      { name: "Java", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "Python", level: 3 },
      { name: "HTML / CSS", level: 2 },
    ],
  },
  {
    title: "Systems & OS",
    skills: [
      { name: "OS Administration", level: 3 },
      { name: "Terminal Navigation", level: 2 },
      { name: "OS Virtualization", level: 2 },
      { name: "Custom EFI / Hackintosh", level: 2 },
      { name: "PC Building", level: 2 },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "Database Integration", level: 3 },
      { name: "MySQL", level: 1 },
      { name: "Supabase", level: 1 },
      { name: "PostgreSQL", level: 1 },
    ],
  },
  {
    title: "Networking",
    skills: [{ name: "Cisco Packet Tracer", level: 2 }],
  },
  {
    title: "Marketing & Communication",
    skills: [
      { name: "Digital Marketing", level: 3 },
      { name: "Social Media Marketing", level: 3 },
      { name: "Ad Design", level: 3 },
      { name: "Dynamic Speaker", level: 3 },
    ],
  },
];

export type Project = {
  title: string;
  caption: string;
  description: string;
  href: string;
  external: boolean;
  cta: string;
};

export const projects: Project[] = [
  {
    title: "IYVIX",
    caption: "Exclusive ecommerce store",
    description:
      "A boutique ecommerce experience designed for premium product storytelling and curated drops.",
    href: "https://iyvix.com",
    external: true,
    cta: "Visit IYVIX.com",
  },
  {
    title: "Procedural Musgrave/Noise Texture",
    caption: "Procedural Texture in Blender",
    description:
      "Synthesizes heightmaps, continental terrains, color ramps - within blender, no extra assets.",
    href: "",
    external: true,
    cta: "View on Gallery",
  },
  {
    title: "More on GitHub",
    caption: "Open source · experiments",
    description:
      "Smaller projects, prototypes and works-in-progress — all collected at @Tasseract.",
    href: "https://github.com/Tasseract",
    external: true,
    cta: "github.com/Tasseract",
  },
];
