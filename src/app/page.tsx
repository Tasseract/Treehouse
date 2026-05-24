import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { footnotes, treehouse, treehouseGroups } from "@/lib/data";

const accentClass = {
  fern: "treehouse-link--fern",
  sun: "treehouse-link--sun",
  sky: "treehouse-link--sky",
  ember: "treehouse-link--ember",
  ink: "treehouse-link--ink",
};

export default function Home() {
  const featuredLinks = treehouseGroups.flatMap((group) =>
    group.links.filter((link) => link.featured),
  );

  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-5 sm:px-7 lg:px-10">
      <div aria-hidden className="absolute inset-0 -z-10">
        <span className="hero-blob blob-1 left-[-18%] top-[-24%] h-[58vmax] w-[58vmax]" />
        <span className="hero-blob blob-2 right-[-20%] top-[7%] h-[48vmax] w-[48vmax]" />
        <span className="hero-blob blob-3 bottom-[-28%] left-[24%] h-[54vmax] w-[54vmax]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] w-full max-w-6xl gap-5 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="treehouse-panel glass-strong relative flex min-h-[32rem] flex-col justify-between p-6 sm:p-8 lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)]">
          <div className="treehouse-orbit" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--md-primary)_26%,transparent)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--md-secondary)_20%,transparent)] blur-3xl"
          />

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-[var(--md-on-surface-variant)]">
              <Sparkles size={14} className="text-[var(--md-primary)]" />
              {treehouse.signal}
            </div>
            <ThemeToggle />
          </div>

          <div className="relative z-10 my-14">
            <p className="mb-5 text-sm font-medium text-[var(--md-on-surface-variant)]">
              {treehouse.handle}
            </p>
            <h1 className="max-w-[8ch] text-[clamp(4.2rem,12vw,8.8rem)] font-semibold leading-[0.82] tracking-normal text-[var(--md-on-surface)]">
              Tree
              <span className="block bg-gradient-to-br from-[var(--md-primary)] via-[var(--md-secondary)] to-[var(--md-primary)] bg-clip-text text-transparent">
                house
              </span>
            </h1>
            <p className="mt-7 max-w-sm text-lg leading-8 text-[var(--md-on-surface-variant)]">
              {treehouse.intro}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--md-surface-container-high)] px-4 py-2 text-sm font-medium text-[var(--md-on-surface)]">
              <MapPin size={16} />
              {treehouse.location}
            </p>
          </div>

          <div className="relative z-10 grid gap-3">
            {featuredLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[var(--md-primary)] px-5 text-sm font-medium text-[var(--md-on-primary)] shadow-[0_8px_28px_-10px_color-mix(in_srgb,var(--md-primary)_70%,black)] transition-transform hover:-translate-y-0.5"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  <Icon size={18} strokeWidth={2.5} />
                  <span>{link.title}</span>
                  <ArrowUpRight className="ml-auto" size={18} strokeWidth={2.5} />
                </a>
              );
            })}
          </div>
        </aside>

        <section className="flex flex-col justify-center gap-5 py-0 lg:py-8">
          <div className="glass flex flex-wrap items-center gap-2 overflow-hidden rounded-full px-3 py-3">
            {footnotes.map((note) => (
              <span
                className="rounded-full bg-[var(--md-surface-container-high)] px-4 py-2 text-xs font-medium text-[var(--md-on-surface-variant)]"
                key={note}
              >
                {note}
              </span>
            ))}
          </div>

          <div className="grid gap-5">
            {treehouseGroups.map((group) => (
              <section className="treehouse-group glass-strong p-3" key={group.title}>
                <h2 className="px-3 pb-3 pt-1 text-sm font-medium text-[var(--md-on-surface-variant)]">
                  {group.title}
                </h2>

                <div className="grid gap-3">
                  {group.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        className={`treehouse-link ${accentClass[link.accent]}`}
                        href={link.href}
                        key={link.title}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer noopener"
                            : undefined
                        }
                      >
                        <span className="treehouse-link__icon">
                          <Icon size={24} strokeWidth={2.3} />
                        </span>
                        <span className="min-w-0">
                          <span className="treehouse-link__title">
                            {link.title}
                          </span>
                          <span className="treehouse-link__label">
                            {link.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="treehouse-link__arrow"
                          size={23}
                          strokeWidth={2.5}
                        />
                      </a>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
