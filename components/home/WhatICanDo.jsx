import Image from "next/image";
import React from "react";

const WhatICanDo = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Web Design",
      details: "I have experience building client-side applications with modern features like Single-Page Applications (SPA) and SEO-friendly coding practices. Using latest frontend tools like React, Next.js, TailwindCSS, and TypeScript, I create user-friendly, high-performance apps.",
      techs: [
        "react.svg",
        "nextjs.svg",
        "tailwind.svg",
        "typescript.svg",
        "js.png"
      ],
    },
    {
      id: 2,
      title: "Backend Development and Web Applications",
      details: "I love building strong, scalable server applications that manipulate a bunch of data and user loads with ease. Currently I have worked a ton with PHP, Laravel, Node.js, MySQL, and MongoDB.",
      techs: ["laravel.svg", "php.png", "nodejs.svg", "mysql.svg", "mongodb.svg"],
    },
  ];
  return (
    <section className="w-full py-10 md:py-20">
      <h1 className="inline-block pb-3 mb-10 capitalize border-b-4 heading border-sky-500">
        What I can do
      </h1>
      <div className="flex flex-col gap-8 xl:flex-row">
        {services.map((service) => (
          <article
            key={service.id}
            className="flex flex-col justify-between flex-1 p-4 space-y-5 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:hover:shadow-lg dark:hover:shadow-slate-700 dark:bg-transparent hover:shadow-xl dark:hover:border-sky-500 hover:border-sky-500 sm:p-6">
            <div>
              <h3 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-slate-100">
                {service.title}
              </h3>

              <p className="mt-2 leading-8 text-gray-600 dark:text-gray-400">{service.details}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 my-3 ">
              {service.techs.map((tech) => (
                <Image
                  src={`/assets/images/skills/${tech}`}
                  key={tech}
                  alt={tech}
                  width={35}
                  height={35}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatICanDo;