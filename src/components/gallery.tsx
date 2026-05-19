"use client";

import { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState<typeof images[number] | null>(null);

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
              <button
                type="button"
                onClick={() => setSelectedImage(img)}
                className="group block w-full cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  draggable={false}
                />
              </button>
            </motion.div>
          ))}
        </div>

        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--md-surface)] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/80"
                aria-label="Close image preview"
              >
                ×
              </button>

              <div className="relative h-[calc(90vh-2rem)] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 60vw"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
