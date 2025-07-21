import React from "react";
import { Code2, Gamepad2, Globe, Coffee } from "lucide-react";

const About = () => {
  return (
    <section className="w-full py-10 md:py-20" id="about">
      <h1 className="inline-block pb-3 mb-10 text-3xl font-bold border-b-4 heading border-sky-500">
        About
      </h1>

      <div className="space-y-10 text-gray-700 dark:text-gray-300">
        {/* Personal Intro */}
        <div className="space-y-4">
          <Globe className="text-sky-500 w-8 h-8 md:w-12 md:h-12" />
          <div className="flex gap-4 items-start">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 dark:text-slate-100 mb-2">
                whoami
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-400">
                I&apos;m Swam Htet Aung, a{" "}
                <strong>24 years old full-stack developer</strong> from Myanmar,
                currently living and working in Thailand. I studied Computer
                Science for three years, but had to pause and leave the country
                due to the military coup (it wasn&apos;t easy). I&apos;m now continuing my
                studies online at the University of the People while working
                full-time as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Journey */}
        <div className="space-y-4">
          <Code2 className="text-green-500 w-8 h-8 md:w-12 md:h-12" />
          <div className="flex gap-4 items-start">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 dark:text-slate-100 mb-2">
                Tech Journey
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-400">
                My love for tech started with gaming and evolved into wondering
                how different tech devices work. I began my dev career with <strong>PHP
                & Laravel</strong>, and eventually got into frontend frameworks like{" "}
                <strong>React</strong> (my favorite), <strong>Vue</strong>, and{" "}
                <strong>Angular</strong>. I&apos;m also comfortable with server
                setups, Linux administration, and managing deployments. I take
                ownership of what I build and care deeply about clean, scalable
                code. I enjoy hybrid work setups, collaborative
                teams, and learning something new every week.
              </p>
            </div>
          </div>
        </div>

        {/* Life Balance */}
        <div className="space-y-4">
          <Gamepad2 className="text-indigo-500 w-8 h-8 md:w-12 md:h-12" />
          <div className="flex gap-4 items-start">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 dark:text-slate-100 mb-2">
                Life Outside Work
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-400">
                I focus a lot on <strong>work-life balance</strong> and believe that life outside work to balance the mental demands of development is important. So you will find me playing video games, watching anime and spending quality time with my family and friends in my leisure time. I also love to travel and my goal is to explore and settle in Europe in the next few years.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Footer */}
        <div className="mt-10 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <Coffee className="w-5 h-5" />
          <span>Fueled by coffee, curiosity, and clean code ✨</span>
        </div>
      </div>
    </section>
  );
};

export default About;
