import Image from "next/image";
import React from "react";

const WhatICanDo = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Web Design",
      details: "I can build different type of user interfaces both for the web and mobile applications, using modern technologies like React, Next.js, Tailwind CSS, and TypeScript.",
      techs: [
        "react.svg",
        "nextjs.svg",
        "tailwind.svg",
        "typescript.svg"
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      details: "I build secure, efficient RESTful APIs and web applications using PHP (Laravel) and occasionally Node.js from including deployment on servers. I typically deploy on DigitalOcean and have experience with MySQL and MongoDB databases.",
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
            className="flex flex-col justify-between flex-1 p-4 space-y-5 transition-all duration-300 bg-white/50 border-2 border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:hover:shadow-lg dark:hover:shadow-slate-700 dark:bg-transparent hover:shadow-xl dark:hover:border-sky-500 hover:border-sky-500 sm:p-6">
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
