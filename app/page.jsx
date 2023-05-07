import Hero from "@/components/Hero";
import NextPage from "@/components/NextPage";
import Projects from "@/components/Projects";
import WhatICanDo from "@/components/WhatICanDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatICanDo />
      <Projects />
      <NextPage message="Read more about me there. 👉" href="about" />
    </>
  );
}
