"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Search } from "lucide-react";
import { motion } from "motion/react";
import { links } from "@/lib/data";

export function LinkTree() {
  const [query, setQuery] = useState("");

  const filteredLinks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return links;
    }

    return links.filter((link) => {
      return (
        link.title.toLowerCase().includes(normalized) ||
        link.description.toLowerCase().includes(normalized)
      );
    });
  }, [query]);

  return (
    <section id="links" className="mx-auto w-full max-w-6xl px-6 pb-16">
      <div className="glass-strong rounded-[2rem] border border-[var(--glass-border)] p-8 shadow-xl shadow-black/5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--md-on-surface-variant)]">
              Treehouse
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-5xl">
              A direct hub for the links I want you to find first.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--md-on-surface-variant)]">
              Browse the links below to connect, follow, and explore. Add or edit entries in <code>src/lib/data.ts</code>.
            </p>
          </div>

          <label className="relative block w-full sm:w-80">
            <span className="sr-only">Search links</span>
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--md-on-surface-variant)]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search links…"
              className="w-full rounded-[1.5rem] border border-[var(--md-outline)] bg-[var(--md-surface-container)] py-4 pl-12 pr-4 text-sm text-[var(--md-on-surface)] outline-none transition focus:border-[var(--md-primary)] focus:ring-2 focus:ring-[var(--md-primary)]/10"
            />
          </label>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((link, index) => (
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
          ))
        ) : (
          <div className="glass rounded-[2rem] border border-[var(--glass-border)] p-10 text-center text-[var(--md-on-surface-variant)]">
            No links match your search. Try another keyword or clear the search field.
          </div>
        )}
      </div>
    </section>
  );
}
