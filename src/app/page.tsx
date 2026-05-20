import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LinkTree } from "@/components/link-tree";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <LinkTree />
      </main>
      <Footer />
    </>
  );
}
