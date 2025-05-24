export default function Experience() {
  const experiences = [
    {
      company: "Befeni Thailand",
      role: "Full Stack Developer",
      date: "Feb 2024 - Present",
      description: [
        "Currently working as a full stack developer at Befeni Thailand, focusing on building and maintaining web applications related to custom shirt selling applications and a production warehouse application to track shirt production steps using React, Vue.js, PHP and Laravel. Also gained DevOps experience by participating in developing an infrastructure management automation platform which enables environment creation, project deployment and replication with just one click using Terraform (AWS), Packer, and NixOS.",
        "My responsibilities involve maintaining and debugging existing legacy codebases while also developing new features to enhance user experience and functionality. Involved in frontend, backend, and also server setups and deployments.",
        "Actively participating in code reviews, team meetings, and project planning sessions to enhance collaboration and project outcomes. Learned a lot about Agile methodologies and best practices to approach any problems/planning in software development.",
      ],
    },
    {
      company: "Brycen Myanmar",
      role: "Junior Web Developer",
      date: "Aug 2023 - Jan 2024",
      description: [
        "Actively participated in developing web application for Japanese warehouse management system using Angular and JAX-RS (Java).",
        "Gained experience writing technical documentation and test cases for the developed features.",
      ],
    },
    {
      company: "Brycen Myanmar",
      role: "Web Developer Intern",
      date: "May 2023 - July 2023",
      description: [
        "A web developer internship focused on React and Laravel,",
        "Built a full stack Laravel application which manages employee informations from scratch.",
      ],
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <h2 className="inline-block pb-3 mb-12 border-b-4 heading border-sky-500">
        Experience
      </h2>
      <div className="relative border-l-2 border-gray-200">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-8">
            {/* Timeline Dot */}
            {index === 0 && (
              <div className="absolute left-[-12px] w-6 h-6 rounded-full bg-sky-500"></div>
            )}
            <div>
              {/* Company */}
              <h3 className="text-xl font-semibold text-gray-800 md:text-2xl dark:text-slate-200">
                {exp.company}
              </h3>
              {/* Role and Date */}
              <p className="mb-4 text-gray-500">
                {exp.role} | {exp.date}
              </p>
              {/* Description */}
              <ul className="ml-5 space-y-2 text-gray-600 list-disc list-outside gray-700 text- md:text-base dark:text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
