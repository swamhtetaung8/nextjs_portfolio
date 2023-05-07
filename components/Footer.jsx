import Link from "next/link";
import React from "react";

const menu = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "works",
  },
  {
    id: 4,
    link: "contact",
  },
  {
    id: 5,
    link: "blogs",
  },
];
const Footer = () => {
  return (
    <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
      <ul className="flex flex-wrap items-center gap-4 mb-6 sm:text-sm sm:mt-0">
        {menu.map((item) => (
          <li
            key={item.id}
            className="text-gray-800 duration-150 capitalize hover:text-sky-500">
            <Link href={`${item.link == "home" ? "/" : item.link}`}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-black/60">
        © 2023 Swam Htet Aung. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
