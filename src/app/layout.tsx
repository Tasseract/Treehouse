import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://troy.vercel.app"),
  title: {
    default: "Treehouse — Link Hub",
    template: "%s · Treehouse",
  },
  description:
    "A dynamic link hub for creative work, code, and contact curated by Troy.",
  keywords: [
    "Treehouse",
    "Link tree",
    "Troy Jose",
    "Next.js",
    "dynamic links",
    "portfolio",
    "GitHub",
  ],
  authors: [{ name: "Troy Jose" }],
  creator: "Troy Jose",
  openGraph: {
    title: "Treehouse — Link Hub",
    description: "A dynamic link hub for creative work, code, and contact curated by Troy.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treehouse — Link Hub",
    description: "A dynamic link hub for creative work, code, and contact curated by Troy.",
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#121318" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${display.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
