import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-0 min-h-screen text-white overflow-x-hidden">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(#0ff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 animate-pulse"></div>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0f24] via-[#0a192f] to-[#000000]"></div>
        <Hero />
        <About />
        <Journey/>
        <Projects />
      </main>
    </>
  );
}
