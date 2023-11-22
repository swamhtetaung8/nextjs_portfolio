"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
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
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <nav className="relative z-50 flex items-center justify-between h-20 ">
      <Link href="/">
        <h1 className="text-3xl text-transparent cursor-pointer  signature bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">
          Swam
        </h1>
      </Link>
      <ul className="hidden gap-10  md:flex">
        {menu.map((item) => (
          <Link href={`${item.link == "home" ? "/" : item.link}`} key={item.id}>
            <li className="capitalize transition-all duration-100 cursor-pointer  hover:text-sky-400 active:scale-105">
              {item.link}
            </li>
          </Link>
        ))}
      </ul>
      <div className="z-10 cursor-pointer md:hidden" onClick={open}>
        <GiHamburgerMenu size={30} />
      </div>
      <Modal opened={opened} padding={"xl"} onClose={close} title="Menu">
        <ul
          className={` bg-white rounded-lg py-5 flex flex-col gap-12 justify-center transition-all duration-500`}>
          {menu.map((item) => (
            <div key={item.id} className="flex items-center justify-between ">
              <FaChevronRight color="gray" />
              <li className="capitalize duration-100 cursor-pointer  text-end active:scale-105">
                <Link
                  href={`${item.link == "home" ? "/" : item.link}`}
                  onClick={close}>
                  {item.link}
                </Link>
              </li>
            </div>
          ))}
        </ul>
        <div className=" text-black/60">
          Contact me @
          <a href="mailto:swamhtetaungg@gmail.com" target="_blank">
            swamhtetaungg@gmail.com
          </a>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
