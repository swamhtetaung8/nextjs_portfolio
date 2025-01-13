import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      id: 1,
      code: "https://github.com/swamhtetaung8/employee-registration-system",
      title: "Employee Registration System",
      desc: "A fullstack laravel application that mananges your employees' informations.",
      img: "ers.png",
    },
    {
      id: 2,
      demo: "https://simpuru-ecommerce.vercel.app/",
      title: "Simpuru",
      desc: "A mini shopping cart management project that was built with React and Redux toolkit.",
      img: "simpuru.png",
    },
    {
      id: 3,
      demo: "https://is-ness.love",
      title: "is ness",
      desc: "A sleek, user-friendly website for is~ness, a brand dedicated to creating natural body care products for babies built with NextJs.",
      img: "isness.png",
    },
    {
      id: 4,
      code: "https://github.com/swamhtetaung8/themealdb-practice-react",
      demo: "https://the-meal-recipe.vercel.app/",
      title: "Food Recipe website",
      desc: "A food recipe website with React and themealdb API. A project I did when I was learning React and working with APIs.",
      img: "recipe.png",
    },
  ];
  return (
    <section id="projects" className="w-full min-h-screen py-10">
      <h1 className="inline-block pb-3 mb-10 border-b-4 heading border-sky-500">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 my-5 rounded lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="block space-y-5 overflow-hidden transition bg-white border-2 border-gray-100 rounded-lg shadow-sm hover:border-sky-500 hover:shadow-lg dark:border-gray-600 dark:hover:shadow-lg dark:hover:shadow-slate-700 dark:bg-transparent dark:hover:border-sky-500">
            <div className="relative md:h-[310px] lg:h-[300px] h-[180px]">
              <a href={project.demo ?? project.code} target="_blank">
                <Image
                  src={`/assets/images/projects/${project.img}`}
                  className="object-cover object-top"
                  alt={project.img}
                  fill
                />
              </a>
            </div>
            <div className="p-4 pt-0">
              <h3 className="mt-0.5 text-2xl font-medium  text-gray-800 dark:text-slate-200">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-8 text-gray-600 dark:text-gray-400 md:text-base">
                {project.desc}
              </p>
              <div className="flex items-center justify-between">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500">
                    Live Demo
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                      &rarr;
                    </span>
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500">
                    Source code
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
