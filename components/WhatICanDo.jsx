import Image from "next/image";
import React from "react";

const WhatICanDo = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Web Design",
      details: "I have experience building client-side applications with modern features like Single-Page Applications (SPA) and SEO-friendly coding practices. Using React, Next.js, TailwindCSS, and TypeScript, I create user-friendly, high-performance apps.",
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
      title: "Backend Web Development and Web Applications",
      details: "I’m a backend enthusiast who loves building strong, scalable server applications that manipulate a bunch of data and user loads with ease. With my skills in PHP, Laravel, Node.js, MySQL, and MongoDB.",
      techs: ["laravel.svg", "php.png", "nodejs.svg", "mysql.svg", "mongodb.svg"],
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
