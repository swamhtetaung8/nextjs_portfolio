import React from "react";
import {
  FaMedium,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
const SocialLinks = () => {
  const socials = [
    {
      id: 1,
      child: (
        <>
          <span>
            <FaGithubSquare size={20} />
          </span>
        </>
      ),
      href: "https://github.com/swamhtetaung8?fbclid=IwAR0m0G514Basufv5GAORcMj4tQ9E3oDxhBH3v1Sl7kqfhICTtcxZ15e7qZc",
      name: "Github",
    },
    {
      id: 2,
      child: (
        <>
          <span>
            <FaLinkedin size={20} />
          </span>
        </>
      ),

      href: "https://www.linkedin.com/in/swamhtetaung/",
      name: "LinkedIn",
    },
    {
      id: 3,
      child: (
        <>
          <FaEnvelope size={20} />
        </>
      ),
      href: "mailto:swamhtetaungg@gmail.com",
      name: "Email",
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {socials.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="p-2 md:p-3 transition-all duration-200 border-[1px] border-gray-300 rounded-full text-black/60 dark:text-gray-300 dark:hover:border-sky-500 dark:hover:text-sky-500 hover:text-sky-500 hover:border-sky-500"
          target="_blank"
          rel="noreferrer"
          title={item.name}
        >
          {item.child}
        </a>
      ))}
      <a
        href="https://medium.com/@swamhtetaungg"
        className="md:hidden p-2 md:p-3 transition-all duration-200 border-[1px] border-gray-300 rounded-full text-black/60 dark:text-gray-300 dark:hover:border-sky-500 dark:hover:text-sky-500 hover:text-sky-500 hover:border-sky-500"
        target="_blank"
        rel="noreferrer"
        title="medium"
      >
        <FaMedium size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
