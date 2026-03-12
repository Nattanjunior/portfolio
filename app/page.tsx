import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";
import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e8e8e4", position: "relative", overflowX: "hidden" }}>
      <Cursor />
      <Background />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
