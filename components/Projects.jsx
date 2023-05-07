import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      id: 1,
      demo: "https://sushi-sha.netlify.app/",
      code: "https://github.com/swamhtetaung8/sushi",
      title: "Sushi website",
      desc: "This project is a bootstrap practice when I was learning bootstrap.",
      img: "sushi.png",
    },
    {
      id: 2,
      demo: "https://simpuru-ecommerce.vercel.app/",
      code: "https://github.com/swamhtetaung8/simpuru-ecommerce",
      title: "Simpuru E-commerce",
      desc: "Simpuru is a mini eceommerce website that was built with React and Redux toolkit.",
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
      <h1 className="text-4xl text-gray-900 font-bold capitalize border-b-4 mb-10 border-sky-500 inline-block pb-3">
        My Works
      </h1>
      <div className="my-5 rounded grid md:grid-cols-2 gap-10 grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border border-gray-100 block bg-white shadow-sm transition hover:shadow-lg space-y-5 overflow-hidden">
            <a
              href={project.demo}
              target="_blank"
              className=" relative  md:h-[260px] h-[180px] block ">
              <Image
                src={`/assets/images/${project.img}`}
                className=" object-contain object-top"
                alt={project.img}
                fill
              />
            </a>
            <div className="p-4 pt-0">
              <h3 className="mt-0.5 text-2xl font-medium  text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 leading-8 text-gray-500 text-sm md:text-base">
                {project.desc}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.demo}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1  font-medium text-sky-500">
                  Live Demo
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1  font-medium text-sky-500">
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
