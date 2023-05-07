import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
const Hero = () => {
  return (
    <section className=" w-full md:py-20 py-10">
      <div className=" w-full flex md:flex-row flex-col justify-between gap-20">
        <div className=" flex flex-col gap-10 items-start">
          <h1 className="text-4xl font-bold capitalize text-gray-900">
            I am Swam Htet Aung
            <br />
            <span className=" my-3 border-b-4 pb-3 border-sky-500 text-lg text-gray-900">
              Web Developer
            </span>
          </h1>
          <p className=" max-w-xl leading-8  text-black/70 ">
            I have studied Computer Science for three years at the University of
            Information Technology and developed a strong passion for software
            engineering and web development. In addition to my academic
            background, I have over three years of experience as a Japanese
            lecturer, improving my communication, teaching, and work ethic
            skills. Currently, I am pursuing full-stack web development and
            working as an web developer intern to enhance my skills and achieve
            my goal of becoming a successful web developer.
          </p>
          <a
            download={true}
            href="/Resume.pdf"
            className="group bg-gradient-to-r from-sky-500 text-white to-blue-500 py-3 px-8 rounded-md flex items-center gap-2">
            Download CV
            <span className=" group-hover:translate-y-1 transition-all duration-200">
              <BsChevronDown size={18} />
            </span>
          </a>
        </div>
        <div className=" divide-y space-y-5">
          <Image
            src="/assets/images/profile.jpg"
            alt=""
            width={333}
            height={400}
            className=" rounded-md object-cover mx-auto"
          />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
