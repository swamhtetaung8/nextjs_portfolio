import NextPage from "@/components/NextPage";
import Projects from "@/components/Projects";
import React from "react";

const Works = () => {
  return (
    <>
      <Projects />
      <NextPage
        message={"Cannot find ways to contact me? You can find there. 👉"}
        href="contact"
      />
    </>
  );
};

export default Works;
