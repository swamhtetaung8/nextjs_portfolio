import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
const Hero = () => {
  return (
    <section className="relative w-full py-10 md:py-20">
      <div className="relative z-10 flex flex-col justify-between w-full gap-20 md:flex-row">
        <div className="flex flex-col items-start flex-1 gap-8 ">
          <div className="space-y-2">
            <h1 className="heading">
              Hello, I&apos;m Swam.
            </h1>
            <h1 className="heading">
              A Full Stack Developer
            </h1>
            <h1 className="heading">
              Based in Thailand
            </h1>
          </div>
          <p className="max-w-xl leading-8 text-gray-600 dark:text-gray-400">     
            From concept to code, I create websites that are not only visually stunning but also highly functional and user-friendly.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1Bq52d9vaznoR8l_ArIuMcbU35JRPWumd/view?usp=sharing"
              target="_blank"
              className="relative px-8 py-3 text-white transition-all duration-700 rounded-full group bg-gradient-to-r from-sky-500 to-blue-500">
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
            width={400}
            height={400}
            className="object-cover mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
