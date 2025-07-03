import Image from "next/image";
import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const WhatICanDo = () => {
  const services = [
    {
      id: 1,
      title: "Front‑End Engineering & UI Design",
      details:
        "I create intuitive, responsive user interfaces for both web and mobile. My modern toolkit is React, Next.js, Tailwind CSS, and TypeScript, yet I'm equally comfortable maintaining legacy Bootstrap or jQuery codebases.",
      techs: [
        "react.svg",
        "nextjs.svg",
        "tailwind.svg",
        "javascript.png",
        "typescript.svg",
        "bootstrap.svg",
      ],
    },
    {
      id: 2,
      title: "Back‑End Development & DevOps",
      details:
        "My backend expertise includes building secure, high-performance RESTful APIs and full-stack applications with PHP and Node.js, supported by comprehensive database knowledge in both SQL and MongoDB. I also enhance development workflows through DevOps practices, utilizing Docker, Nginx, automation tools (Playwright, n8n), and server provisioning to deliver complete, production-ready solutions.",
      techs: [
        "laravel.svg",
        "php.png",
        "nodejs.svg",
        "mysql.svg",
        "mongodb.svg",
        "docker.svg",
      ],
    },
  ];

  return (
    <section className="w-full py-10 md:py-20">
      <h1 className="inline-block pb-3 mb-10 capitalize border-b-4 heading border-sky-500">
        What I can do
      </h1>

      <TooltipProvider>
        <div className="flex flex-col gap-8 xl:flex-row">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between flex-1 p-4 space-y-5 transition-all duration-300 bg-white/50 border-2 border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:hover:shadow-lg dark:hover:shadow-slate-700 dark:bg-transparent hover:shadow-xl dark:hover:border-sky-500 hover:border-sky-500 sm:p-6"
            >
              <div>
                <h3 className="mt-0.5 text-xl font-medium text-gray-900 dark:text-slate-100">
                  {service.title}
                </h3>

                <p className="mt-2 leading-8 text-gray-600 dark:text-gray-400">
                  {service.details}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 my-3">
                {service.techs.map((techFile) => {
                  const label = techFile.replace(/\.[^/.]+$/, ""); // strip extension

                  return (
                    <Tooltip key={label}>
                      <TooltipTrigger asChild>
                        <Image
                          src={`/assets/images/skills/${techFile}`}
                          alt={label}
                          width={35}
                          height={35}
                          className="cursor-pointer"
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top" sideOffset={4}>
                        <span className="text-sm font-medium capitalize">
                          {label}
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
};

export default WhatICanDo;
