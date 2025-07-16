import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "Befeni Thailand",
      role: "Full Stack Developer",
      date: "Feb 2024 - Present",
      description: [
        "Developed and maintained B2B/B2C e-commerce features using PHP (Laravel), React, Vue, and TailwindCSS for Central European clients.",
        "Contributed to an infrastructure management tool using AdonisJS, React, Terraform (AWS), NixOS, and Packer.",
        "Built custom Discord bot commands with Node.js to automate internal tasks for non-technical staff.",
        "Refactored legacy PHP code into clean, object-oriented structures for better maintainability.",
        "Integrated n8n to automate post-deployment workflows.",
        "Set up centralized monitoring with Grafana and Prometheus for primary web servers.",
        "Performed manual Linux server setups including hardening, automation, and tool installations."
      ],
      url: "https://www.befeni.de/",
      logo: "/assets/images/works/befeni.jpg",
    },
    {
      company: "Brycen Myanmar",
      role: "Junior Web Developer",
      date: "Aug 2023 - Jan 2024",
      description: [
        "Actively participated in developing web application for Japanese warehouse management system using Angular and JAX-RS (Java).",
        "Gained experience writing technical documentation and test cases for the developed features.",
      ],
      url: "https://www.brycenmyanmar.com.mm/",
      logo: "/assets/images/works/brycen.jpg",
    },
    {
      company: "Brycen Myanmar",
      role: "Web Developer Intern",
      date: "May 2023 - July 2023",
      description: [
        "A web developer internship focused on React and Laravel.",
        "Built a full stack Laravel application which manages employee informations from scratch.",
      ],
      url: "https://www.brycenmyanmar.com.mm/",
      logo: "/assets/images/works/brycen.jpg",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <h2 className="inline-block pb-3 mb-12 text-3xl font-bold border-b-4 heading border-sky-500">
        Experience
      </h2>
      <div className="relative border-l-2 border-gray-200 dark:border-gray-600">
        {/* Timeline Dot */}
        <div className="absolute -left-3 w-6 h-6 rounded-full bg-sky-500 border-4 border-white dark:border-gray-900"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 ml-8">
            {/* Card Content */}
            <div className="flex items-start gap-4">
              {/* Info */}
              <div>
                <div className="flex items-center gap-x-4 md:gap-x-3 mb-3">
                  {/* Logo */}
                  <div className="min-w-[48px] h-12 relative">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full shadow-sm object-contain"
                    />
                  </div>
                  <div>
                    <a
                      href={exp.url}
                      target="_blank"
                      className="text-xl font-semibold text-gray-800 md:text-2xl dark:text-slate-200 hover:underline"
                    >
                      {exp.company}
                    </a>
                    <p className="text-gray-500 dark:text-gray-400">
                      {exp.role} | {exp.date}
                    </p>
                  </div>
                </div>
                <ul className="ml-5 space-y-2 list-disc text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li className="leading-7" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
