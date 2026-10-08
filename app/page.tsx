import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="absolute -left-[999px] top-2 z-20 rounded-md bg-ink px-3.5 py-2 text-bg focus:left-2">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Process />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
