export default function Experience() {
    const experiences = [
      {
        company: "Befeni Limited",
        role: "Full Stack Developer",
        date: "Feb 2024 - Present",
        description: [
          "Collaborate with team members remotely to design and develop web applications for our fashion company, including shirt-selling websites, admin panels, and a production factory application, using various web technologies such as Laravel, Node.js, React, and Vue.js.",
          "Developed multiple skills for not just as a developer, but as a person to get any difficult task done properly under the guidance of experienced mentors.",
        ],
      },
      {
        company: "Brycen Myanmar",
        role: "Junior Web Developer",
        date: "Aug 2023 - Jan 2024",
        description: [
          "Actively participated in developing web application for Japanese warehouse management system using Angular and JAX-RS (Java).",
          "Conducted thorough testing to ensure the quality of the final product. Learnt new technologies to improve my skills as a junior web developer.",
        ],
      },
      {
        company: "Brycen Myanmar",
        role: "Web Developer Intern",
        date: "May 2023 - July 2023",
        description: [
          "A web developer internship focused on React and Laravel,",
          "Built a full-stack Laravel project from scratch.",
        ],
      }
    ];
  
    return (
      <section className="py-10 md:py-20">
        <h2 className="inline-block pb-3 mb-12 border-b-4 heading border-sky-500">Experience</h2>
        <div className="relative border-l-2 border-gray-200">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8">
              {/* Timeline Dot */}
              {index===0 && (<div className="absolute left-[-12px] w-6 h-6 rounded-full bg-sky-500"></div>)}
              <div>
                {/* Company */}
                <h3 className="text-xl font-semibold text-gray-800 md:text-2xl dark:text-slate-200">{exp.company}</h3>
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
  