"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { MdButton } from "./ui/md-button";
import { profile } from "@/lib/data";

const fade = {
  hidden: { y: 24, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80svh] items-center overflow-hidden px-6 py-20"
    >
      {/* gradient blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <span className="hero-blob blob-1 left-[-10%] top-[-15%] h-[60vmax] w-[60vmax]" />
        <span className="hero-blob blob-2 right-[-15%] top-[10%] h-[50vmax] w-[50vmax]" />
        <span className="hero-blob blob-3 left-[20%] bottom-[-25%] h-[55vmax] w-[55vmax]" />
      </div>

      {/* subtle grain via radial overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,transparent_55%,var(--md-surface)_85%)]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="font-display text-6xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-7xl md:text-[clamp(5rem,8vw,7rem)]"
        >
          Treehouse
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-4 text-xl font-medium uppercase tracking-[0.24em] text-[var(--md-primary)]"
        >
          By Jhalen Troy
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 max-w-2xl text-lg text-[var(--md-on-surface-variant)] sm:text-xl"
        >
          {profile.title}
          <br />
          <span className="text-[var(--md-on-surface)]">{profile.tagline}</span>
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-10"
        >
          <MdButton variant="filled" size="lg" href="#links">
            View links
          </MdButton>
        </motion.div>
      </div>

      <motion.a
        href="#links"
        aria-label="Scroll to links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--md-on-surface-variant)]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
