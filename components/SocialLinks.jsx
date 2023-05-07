import React from "react";
import {
  FaFacebookSquare,
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
            <FaFacebookSquare size={25} />
          </span>
        </>
      ),
      href: "https://www.facebook.com/swamhtet.aung.52/",
    },
    {
      id: 2,
      child: (
        <>
          <span>
            <FaGithubSquare size={25} />
          </span>
        </>
      ),
      href: "https://github.com/swamhtetaung8?fbclid=IwAR0m0G514Basufv5GAORcMj4tQ9E3oDxhBH3v1Sl7kqfhICTtcxZ15e7qZc",
    },
    {
      id: 3,
      child: (
        <>
          <span>
            <FaLinkedin size={25} />
          </span>
        </>
      ),

      href: "https://www.linkedin.com/in/swamhtetaung/",
    },
    {
      id: 4,
      child: (
        <>
          <FaEnvelope size={25} />
        </>
      ),
      href: "mailto:swamhtetaungg@gmail.com",
    },
  ];
  return (
    <div className=" flex items-center gap-8 justify-evenly py-5">
      {socials.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className=" text-black/60 hover:text-black transition-all duration-200"
          target="_blank"
          rel="noreferrer">
          {item.child}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
