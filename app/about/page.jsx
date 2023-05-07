import NextPage from "@/components/NextPage";
import Image from "next/image";
import React from "react";

const About = () => {
  const works = [
    {
      id: 1,
      position: "Web Developer",
      type: "Internship",
      company: "Brycen Myanmar",
      image: "brycen.jpg",
      duration: "2023 May - Present",
    },
    {
      id: 2,
      position: "Japanese Lecturer",
      type: "Full Time",
      company: "KBTC School of Information Technology",
      image: "kbtc.jpg",
      duration: "2022 July - 2022 November",
    },
    {
      id: 3,
      position: "Japanese Lecturer",
      type: "Freelance",
      company: "Myself",
      duration: "2020 January - Present",
    },
  ];

  return (
    <section className="pt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10 md:gap-0">
        <Image
          src="/assets/images/aboutme.svg"
          width="600"
          height="500"
          alt="an-svg"
        />
        <div className=" md:text-end text-center text-sm md:text-lg space-y-5 md:space-y-10 text-gray-900 font-medium capitalize">
          <h1>web developer</h1>
          <h1>sport enthusiast</h1>
          <h1>gaming enthusiast</h1>
        </div>
      </div>
      <div className=" mb-20">
        <h1 className="text-4xl text-gray-900 font-bold capitalize border-b-4 mb-10 border-sky-500 inline-block pb-3">
          About Me
        </h1>
        <div className=" space-y-10 ">
          <p className="text-lg text-gray-700 font-medium leading-8">
            Hello! I&apos;m Swam Htet Aung, but you can call me Shinji. I&apos;m
            a web developer from Myanmar and I love making websites that are
            user-friendly and innovative.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-8">
            When I&apos;m not coding, I enjoy watching sports and playing games.
            These hobbies have given me a broad perspective that I bring to all
            my work.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-8">
            I got into web development in 2017 when I started learning HTML and
            CSS in university. Since then, I&apos;ve learned a lot of different
            technologies like Bootstrap, Tailwind, JavaScript, React, PHP and
            more. Right now, I&apos;m working on becoming an expert in NextJs
            and Laravel.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-8">
            I believe that every step, no matter how small, is important on the
            path to success. I&apos;m proud of what I&apos;ve accomplished so
            far and I&apos;m excited about what&apos;s next.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-8">
            My goal is to create websites that go above and beyond what clients
            expect. With my passion for the latest technologies and my
            dedication to delivering amazing results, I&apos;m confident I can
            help businesses succeed in today&apos;s digital world.
          </p>
        </div>
      </div>

      <div className=" mb-20">
        <h1 className="text-4xl text-gray-900 font-bold capitalize border-b-4 mb-10 border-sky-500 inline-block pb-3">
          Work Experience
        </h1>
        <ul className=" list-disc space-y-10">
          {works.map((work) => (
            <li key={work.id}>
              <div className=" flex justify-between md:flex-row md:gap-0 flex-col gap-5">
                <div>
                  <p>
                    {work.position} {`(${work.type})`}
                  </p>
                  <p className=" text-gray-500">{work.duration}</p>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <p className=" text-gray-500">@{work.company}</p>
                  {work.image && (
                    <Image
                      src={`/assets/images/works/${work.image}`}
                      width="50"
                      height="50"
                      className=" rounded-full border object-cover"
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
