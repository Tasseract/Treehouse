"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "./section-heading";

const images = [
  { src: require("../../assets/Planet 1.png"), alt: "Planet 1" },
  { src: require("../../assets/Planet 2.png"), alt: "Planet 2" },
  { src: require("../../assets/Planet 3.png"), alt: "Planet 3" },
  { src: require("../../assets/shot1.png"), alt: "Shot 1" },
  { src: require("../../assets/shot2.png"), alt: "Shot 2" },
  { src: require("../../assets/shot3.png"), alt: "Shot 3" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Gallery" title="Selected images" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="overflow-hidden rounded-lg bg-[var(--md-surface-container-low)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
