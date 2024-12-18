"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { FaChevronRight } from "react-icons/fa";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Link } from 'react-scroll';

const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "projects",
    },
    {
      id: 3,
      name: "contact",
    }
  ];
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <nav id="home" className="relative z-50 flex items-center justify-between h-20 ">
      <Link to="home" smooth duration={500}>
        <h1 className="text-3xl text-transparent cursor-pointer signature bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">
          Swam
        </h1>
      </Link>
      <ul className="items-center hidden gap-10 md:flex">
        {menu.map((item) => {
          return (
            <Link to={item.name} key={item.id} smooth duration={500}>
              <li className={`capitalize transition-all duration-100 cursor-pointer hover:text-sky-400 active:scale-105 relative`}>
                {item.name}
              </li>
            </Link>
          )
        })}
        <ThemeSwitch/>
      </ul>
      <div className="z-10 cursor-pointer md:hidden">
        <ThemeSwitch/>
      </div>
    </nav>
  );
};

export default Navbar;
