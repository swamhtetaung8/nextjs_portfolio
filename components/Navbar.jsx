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
    <nav className="h-20 flex items-center justify-between relative z-50 ">
      <Link href="/">
        <h1 className=" signature text-3xl cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500">
          Shinji
        </h1>
      </Link>
      <ul className=" hidden md:flex gap-10">
        {menu.map((item) => (
          <Link href={`${item.link == "home" ? "/" : item.link}`} key={item.id}>
            <li className="  hover:text-sky-400 transition-all cursor-pointer capitalize active:scale-105 duration-100">
              {item.link}
            </li>
          </Link>
        ))}
      </ul>
      <div className="md:hidden cursor-pointer z-10" onClick={open}>
        <GiHamburgerMenu size={30} />
      </div>
      <Modal opened={opened} padding={"xl"} onClose={close} title="Menu">
        <ul
          className={` bg-white rounded-lg py-5 flex flex-col gap-12 justify-center transition-all duration-500`}>
          {menu.map((item) => (
            <div key={item.id} className=" flex items-center justify-between">
              <FaChevronRight color="gray" />
              <li className=" text-end cursor-pointer capitalize active:scale-105 duration-100">
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
