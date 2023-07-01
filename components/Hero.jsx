import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
const Hero = () => {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="flex flex-col justify-between w-full gap-20 md:flex-row">
        <div className="flex flex-col items-start gap-10 ">
          <h1 className="text-4xl font-bold text-gray-900 capitalize">
            I am Swam Htet Aung
            <br />
            <span className="pb-3 my-3 text-lg text-gray-900 border-b-4 border-sky-500">
              Web Developer
            </span>
          </h1>
          <p className="max-w-xl leading-8 text-black/70">
            I studied Computer Science for three years, specializing in software
            engineering and web development. With over three years of experience
            as a Japanese lecturer, I honed my communication and teaching
            skills. Now, I am pursuing full-stack web development and have
            immersed myself in staying up-to-date with the latest technologies
            while simultaneously contributing to the development of impactful
            applications that benefit our society and environment.
          </p>
          <a
            download={true}
            href="/Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 text-white rounded-md group bg-gradient-to-r from-sky-500 to-blue-500">
            Download CV
            <span className="transition-all duration-200 group-hover:translate-y-1">
              <BsChevronDown size={18} />
            </span>
          </a>
        </div>
        <div className="space-y-5 divide-y ">
          <Image
            src="/assets/images/profile.jpg"
            alt=""
            width={333}
            height={400}
            className="object-cover mx-auto rounded-md "
          />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
