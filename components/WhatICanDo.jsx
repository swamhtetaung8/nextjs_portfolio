import Image from "next/image";
import React from "react";

const WhatICanDo = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Web Design",
      details:
        "I have experience in building exceptional client-side applications that incorporate modern features like Single-Page Applications (SPA) and semantic coding styles that adhere to best practices for Search Engine Optimization (SEO) optimization. Using React, NextJs, TailwindCSS, and TypeScript, I can create immersive and user-friendly applications that provide a seamless user experience.",
      techs: [
        "react.svg",
        "nextjs.svg",
        "tailwind.svg",
        "angular.png",
        "typescript.svg",
        "js.png",
        "bootstrap.png",
        "html.png",
        "css.png",
      ],
    },
    {
      id: 2,
      title: "Backend Web Development and Web Applications",
      details:
        "I possess the expertise to design and construct robust, scalable server applications that are capable of seamlessly handling increased traffic and user loads. My proficiency with cutting-edge technologies such as PHP, Laravel, and MySQL allows me to implement efficient and optimized solutions that can be easily maintained over time.",
      techs: ["laravel.svg", "php.png", "java.png", "mysql.svg"],
    },
  ];
  return (
    <section className="w-full py-10 md:py-20">
      <h1 className="inline-block pb-3 mb-10 text-4xl font-bold text-gray-900 capitalize border-b-4 border-sky-500">
        What I can do
      </h1>
      <div className="my-5 space-y-10 rounded">
        {services.map((service) => (
          <article
            key={service.id}
            className="p-4 space-y-5 transition bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
              {service.title}
            </h3>

            <p className="mt-2 leading-8 text-gray-500">{service.details}</p>
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
