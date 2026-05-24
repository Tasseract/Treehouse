"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { links } from "@/lib/data";

export function LinkTree() {
  return (
    <section id="links" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="glass-strong rounded-[2rem] border border-[var(--glass-border)] p-6 shadow-xl shadow-black/5">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--md-on-surface-variant)]">
            Link hub
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-5xl">
            The links I want visitors to see first.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--md-on-surface-variant)]">
            No extra pages. No distractions. Just the links that matter.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {links.map((link, index) => (
          <motion.a
            key={`${link.href}-${index}`}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer noopener" : undefined}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group glass rounded-[2rem] border border-[var(--glass-border)] p-6 no-underline transition duration-200 hover:-translate-y-1 hover:border-[var(--md-primary)]/60 hover:bg-[var(--md-surface-container-highest)]"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${
                  link.accent === "secondary"
                    ? "bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)]"
                    : "bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]"
                }`}
              >
                {link.accent ?? "primary"}
              </span>
              <span className="text-[var(--md-on-surface-variant)]">
                {link.external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[var(--md-on-surface)]">
              {link.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--md-on-surface-variant)]">
              {link.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
