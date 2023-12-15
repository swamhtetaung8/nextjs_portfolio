import NextPage from "@/components/NextPage";
import Image from "next/image";
import React from "react";

const About = () => {
  const works = [
    {
      id: 1,
      position: "Junior Web Developer",
      type: "Full Time",
      company: "Brycen Myanmar",
      image: "brycen.jpg",
      duration: "2023 August - Present",
    },
    {
      id: 2,
      position: "Web Developer",
      type: "Internship",
      company: "Brycen Myanmar",
      image: "brycen.jpg",
      duration: "2023 May - 2023 July",
    },
    {
      id: 3,
      position: "Japanese Lecturer",
      type: "Full Time",
      company: "KBTC School of Information Technology",
      image: "kbtc.jpg",
      duration: "2022 July - 2022 November",
    },
    {
      id: 4,
      position: "Japanese Lecturer",
      type: "Freelance",
      company: "Myself",
      duration: "2020 January - Present",
    },
  ];

  return (
    <section className="pt-10">
      <div className="flex flex-col items-center justify-between gap-10 mb-20 md:flex-row md:gap-0">
        <Image
          src="/assets/images/aboutme.svg"
          width="600"
          height="500"
          alt="an-svg"
        />
        <div className="space-y-5 text-sm font-medium text-center text-gray-900 capitalize md:text-end md:text-lg md:space-y-10">
          <h1>web developer</h1>
          <h1>book worm</h1>
          <h1>travel enthusiast</h1>
        </div>
      </div>
      <div className="mb-20 ">
        <h1 className="inline-block pb-3 mb-10 text-4xl font-bold text-gray-900 capitalize border-b-4 border-sky-500">
          About Me
        </h1>
        <div className="space-y-10 ">
          <p className="text-lg font-medium leading-8 text-gray-700">
            Hello! I&apos;m Swam Htet Aung, but you can call me Swam. I&apos;m a
            web developer from Myanmar and I love making websites that are
            user-friendly and innovative.
          </p>
          <p className="text-lg font-medium leading-8 text-gray-700">
            When I&apos;m not coding, I reading books both fictions and
            non-fictions and also playing chill games. These hobbies have given
            me a broad perspective that I bring to all my work.
          </p>
          <p className="text-lg font-medium leading-8 text-gray-700">
            I got into web development in 2017 when I started learning HTML and
            CSS in university. Since then, I&apos;ve learned a lot of different
            technologies like React, Laravel, Angular and more. Right now,
            I&apos;m working on becoming an expert in both frontend and backend
            as a whole.
          </p>
          <p className="text-lg font-medium leading-8 text-gray-700">
            I believe that every step, no matter how small, is important on the
            path to success. I&apos;m proud of what I&apos;ve accomplished so
            far and I&apos;m excited about what&apos;s next.
          </p>
          <p className="text-lg font-medium leading-8 text-gray-700">
            My goal is to create websites that go above and beyond what clients
            expect. With my passion for the latest technologies and my
            dedication to delivering amazing results, I&apos;m confident I can
            help businesses succeed in today&apos;s digital world.
          </p>
        </div>
      </div>

      <div className="mb-20 ">
        <h1 className="inline-block pb-3 mb-10 text-4xl font-bold text-gray-900 capitalize border-b-4 border-sky-500">
          Work Experience
        </h1>
        <ul className="space-y-10 list-disc ">
          {works.map((work) => (
            <li key={work.id}>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
                <div>
                  <p>
                    {work.position} {`(${work.type})`}
                  </p>
                  <p className="text-gray-500 ">{work.duration}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 ">@{work.company}</p>
                  {work.image && (
                    <Image
                      src={`/assets/images/works/${work.image}`}
                      width="50"
                      height="50"
                      className="object-cover border rounded-full "
                      alt={work.company}
                    />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <NextPage href="works" message="You can check out my works there. 👉" />
    </section>
  );
};

export default About;
