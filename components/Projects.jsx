import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      id: 1,
      code: "https://github.com/swamhtetaung8/employee-registration-system",
      title: "Employee Registration System",
      desc: "This is a fullstack laravel application where you can manange your employees' informations.",
      img: "ers.png",
    },
    {
      id: 2,
      demo: "https://simpuru-ecommerce.vercel.app/",
      code: "https://github.com/swamhtetaung8/simpuru-ecommerce",
      title: "Simpuru",
      desc: "Simpuru is a mini shopping cart management website that was built with React and Redux toolkit.",
      img: "simpuru.png",
    },
    {
      id: 3,
      demo: "https://money-tracker-sha.vercel.app/",
      code: "https://github.com/swamhtetaung8/Money-tracker-react",
      title: "Expense tracker App",
      desc: "This project is to organize your expenses and incomes using React and local storage for memory.",
      img: "expensetracker.png",
    },
    {
      id: 4,
      demo: "https://gpt3withreactbyswamhtetaung.netlify.app/",
      code: "https://github.com/swamhtetaung8/gpt3",
      title: "GPT3",
      desc: "GPT3 is a CSS refresher for me when I was started working with React.",
      img: "gpt3.png",
    },
    {
      id: 5,
      demo: "https://themealdb-practice-sha.vercel.app/",
      code: "https://github.com/swamhtetaung8/themealdb-practice-react",
      title: "Food recipe website",
      desc: "This is a food recipe website with React and themealdbAPI. I started learning about working with APIs in this project.",
      img: "recipe.png",
    },
    {
      id: 6,
      demo: "https://movie-sha.vercel.app/",
      code: "https://github.com/swamhtetaung8/netflix-clone",
      title: "Netflix clone",
      desc: "A Netflix like website with features like Login, Register and Store your favourite movies in the database using React and Firebase.",
      img: "netflix-clone.png",
    },
  ];
  return (
    <section className="w-full min-h-screen py-10">
      <h1 className="inline-block pb-3 mb-10 text-4xl font-bold text-gray-900 capitalize border-b-4 border-sky-500">
        My Works
      </h1>
      <div className="grid grid-cols-1 gap-10 my-5 rounded md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="block space-y-5 overflow-hidden transition bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg">
            <div className=" relative  md:h-[260px] h-[180px] ">
              <a href={project.demo ?? project.code} target="_blank">
                <Image
                  src={`/assets/images/${project.img}`}
                  className="object-cover object-top md:object-contain"
                  alt={project.img}
                  fill
                />
              </a>
            </div>
            <div className="p-4 pt-0">
              <h3 className="mt-0.5 text-2xl font-medium  text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-8 text-gray-500 md:text-base">
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
                <a
                  href={project.code}
                  target="_blank"
                  className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500">
                  Source code
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
