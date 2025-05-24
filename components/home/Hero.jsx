import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";

const NEXT_PUBLIC_RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL

const Hero = () => {
  return (
    <section className="relative w-full py-10">
      <div className="relative z-10 flex flex-col justify-between w-full gap-20 lg:flex-row">
        <div className="flex flex-col items-start flex-1 gap-8 ">
          <div className="space-y-2">
            <h1 className="subheading">Hi, I&apos;m Swam</h1>
            <h1 className="subheading">A Full Stack Developer</h1>
            <h1 className="subheading">React, PHP, & Go Enthusiast</h1>
          </div>
          <p className="max-w-xl leading-8 text-gray-600 dark:text-gray-400">
            A fast-learning web developer with two years of hands-on
            experience in the LNMP stack (Linux, Nginx, MySQL, PHP). I also
            enjoy building modern frontends with React and Next.js. Currently,
            I&apos;m exploring Go to build CLI tools and deepen my understanding of
            modern backend development. Outside of coding, I unwind with video
            games and football.
          </p>

          <div className="flex items-center gap-2">
            <a
              href={NEXT_PUBLIC_RESUME_URL}
              target="_blank"
              className="relative px-4 py-2 md:px-8 md:py-3 text-white transition-all duration-700 rounded-full group bg-gradient-to-r from-sky-500 to-blue-500"
            >
              <span className="absolute inset-0 transition-opacity duration-500 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-sky-300 to-blue-700"></span>
              <span className="relative z-10">RESUME</span>
            </a>
            <SocialLinks />
          </div>
        </div>
        <div className="space-y-5 divide-y">
          <Image
            src="/assets/images/profile.jpg"
            alt=""
            width={450}
            height={450}
            className="object-cover mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
