import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <main className="site">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
