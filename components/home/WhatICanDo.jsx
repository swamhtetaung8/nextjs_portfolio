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
      title: "Front‑End Development",
      details:
        "I can transform UI designs from Photoshop or Figma into intuitive, responsive user interfaces for both web and mobile. My modern toolkit is React, Next.js, Tailwind CSS, and TypeScript, yet I'm equally comfortable maintaining legacy Bootstrap or jQuery codebases.",
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
      title: "Back‑End Development",
      details:
        "My backend expertise includes building secure, high-performance RESTful APIs and full-stack applications with PHP and Node.js, supported by comprehensive database knowledge in both SQL and MongoDB.",
      techs: [
        "laravel.svg",
        "php.png",
        "nodejs.svg",
        "mysql.svg",
        "mongodb.svg",
      ],
    },
    {
      id: 3,
      title: "DevOps/Automations",
      details:
        "I enjoy both setting up servers manually and automating workflows. My go-to tools include Docker and Nginx for environment configuration, while I use n8n for workflow automation and Playwright for end-to-end testing.",
      techs: [
        "docker.svg",
        "nginx.svg",
        "n8n.png",
        "playwright.png",
      ],
    },
    {
      id: 4,
      title: "UI/UX design",
      details:
        "I design web interfaces from the ground up, starting from low-fidelity wireframes to high-fidelity prototypes/designs using tools like Balsamiq and Figma to ensure a smooth user experience.",
      techs: [
        "balsamiq.svg",
        "figma.svg",
      ],
    },
  ];

  return (
    <section className="w-full py-10 md:py-20">
      <h1 className="inline-block pb-3 mb-10 capitalize border-b-4 heading border-sky-500">
        What I can do
      </h1>

      <TooltipProvider>
        <div className="grid grid-cols-2 gap-8 xl:flex-row">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between flex-1 p-6 space-y-6 transition-all duration-300 border-2 rounded-2xl shadow-md bg-white/60 backdrop-blur-md border-gray-200 dark:border-gray-700 dark:bg-slate-900/60 hover:shadow-xl hover:border-sky-500 dark:hover:border-sky-400 dark:hover:shadow-sky-700/30 group"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-500 transition-colors duration-200">
                  {service.title}
                </h3>
            
                <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {service.details}
                </p>
              </div>
            
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {service.techs.map((techFile) => {
                  const label = techFile.replace(/\.[^/.]+$/, "");
            
                  return (
                    <Tooltip key={label}>
                      <TooltipTrigger asChild>
                        <Image
                          src={`/assets/images/skills/${techFile}`}
                          alt={label}
                          width={40}
                          height={40}
                          className="transition-transform duration-200 transform hover:scale-110 cursor-pointer drop-shadow-sm"
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top" sideOffset={6}>
                        <span className="text-sm font-medium capitalize">{label}</span>
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
