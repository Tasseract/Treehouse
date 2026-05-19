"use client";

import { motion } from "motion/react";
import { MapPin, Languages, Cake } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/data";

const facts = [
  { icon: MapPin, label: "Based in", value: "Currimao, Ilocos Norte" },
  { icon: Cake, label: "Age", value: `${profile.age}` },
  {
    icon: Languages,
    label: "Languages",
    value: profile.languages.join(" · "),
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title={profile.about.headline} />

        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard intense className="p-8 sm:p-10">
              {profile.about.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-lg leading-relaxed text-[var(--md-on-surface)] sm:text-xl"
                      : "mt-5 text-base leading-relaxed text-[var(--md-on-surface-variant)] sm:text-lg"
                  }
                >
                  {text}
                </p>
              ))}
            </GlassCard>
          </motion.div>

          <div className="grid gap-4 content-start">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <GlassCard interactive className="flex items-center gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]">
                    <f.icon size={20} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-[var(--md-on-surface-variant)]">
                      {f.label}
                    </span>
                    <span className="text-base font-medium text-[var(--md-on-surface)]">
                      {f.value}
                    </span>
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
