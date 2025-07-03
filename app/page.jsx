import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import WhatICanDo from "@/components/home/WhatICanDo";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatICanDo />
      <About />
      <Experience/>
      <Projects />
      <Contact />
    </>
  );
}
