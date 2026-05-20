"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./section-heading";
import { videos, sectionHeadings } from "@/lib/data";

const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[number] | null>(null);

  return (
    <section id="videos" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={sectionHeadings.videos.eyebrow}
          title={sectionHeadings.videos.title}
          description={sectionHeadings.videos.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => {
            const id = getYouTubeId(video.url);
            const thumbnail = id
              ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
              : "";

            return (
              <motion.div
                key={video.url}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <GlassCard className="group overflow-hidden p-0">
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="relative block w-full overflow-hidden text-left"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={`Thumbnail for ${video.title}`}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          draggable={false}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-slate-900 text-sm text-slate-400">
                          No thumbnail available
                        </div>
                      )}
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg">
                          ▶
                        </span>
                      </span>
                    </div>
                    <div className="space-y-2 p-5">
                      <h3 className="text-base font-semibold tracking-tight text-[var(--md-on-surface)]">
                        {video.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--md-on-surface-variant)]">
                        {video.description}
                      </p>
                    </div>
                  </button>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {selectedVideo ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--md-surface)] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/80"
                aria-label="Close video player"
              >
                ×
              </button>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.url)}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="space-y-3 border-t border-[var(--md-outline)] p-6 text-sm text-[var(--md-on-surface-variant)]">
                <h3 className="text-lg font-semibold text-[var(--md-on-surface)]">
                  {selectedVideo.title}
                </h3>
                <p>{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
