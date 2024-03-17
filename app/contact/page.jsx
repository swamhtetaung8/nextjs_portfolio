"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import NextPage from "@/components/NextPage";
const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+95 9795865149",
      title: "Phone",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "swamhtetaungg@gmail.com",
      title: "Email",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Ubon Rachathani, Thailand",
      title: "Home",
    },
  ];

  const socialDetails = [
    {
      id: 1,
      child: (
        <>
          <span>
            <FaFacebookSquare size={25} />
          </span>
        </>
      ),
      name: "Swam Htet Aung",
      href: "https://www.facebook.com/swamhtet.aung.52/",
    },
    {
      id: 2,
      child: (
        <>
          <FaInstagramSquare size={25} />
        </>
      ),
      name: "swamhtetaungg",
      href: "https://www.instagram.com/swamhtetaungg/",
    },
    {
      id: 3,
      child: (
        <>
          <span>
            <FaGithubSquare size={25} />
          </span>
        </>
      ),
      name: "Swam Htet Aung",
      href: "https://github.com/swamhtetaung8?fbclid=IwAR0m0G514Basufv5GAORcMj4tQ9E3oDxhBH3v1Sl7kqfhICTtcxZ15e7qZc",
    },
    {
      id: 4,
      child: (
        <>
          <span>
            <FaLinkedin size={25} />
          </span>
        </>
      ),
      name: "Swam Htet Aung",
      href: "https://www.linkedin.com/in/swamhtetaung/",
    },
  ];

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [loader, setLoader] = useState(false);
  const [submitValue, setSubmitValue] = useState("Let's Talk");
  const [submitBg, setSubmitBg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_j9rxxmk",
        "template_e2z53km",
        form.current,
        "V8z9nQohXTgizYNnf"
      )
      .then(
        (result) => {
          setLoader(false);
          console.log(result.text);
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          setSubmitValue("Sent Successfully");
          setSubmitBg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="pt-10">
      <div className="max-w-xl space-y-3">
        <p className="inline-block pb-3 mb-10 text-4xl font-bold text-gray-900 capitalize border-b-4 border-sky-500">
          Contact
        </p>
        <p>You can contact me via these.</p>
      </div>
      <div>
        <ul className="flex flex-wrap items-center justify-between mt-12 md:flex-nowrap gap-x-12 gap-y-12 lg:gap-x-20">
          {contactMethods.map((item) => (
            <li key={item.title}>
              <h4 className="text-lg font-medium text-gray-800">
                {item.title}
              </h4>
              <div className="flex items-center mt-3 gap-x-3">
                <div className="flex-none text-gray-400">{item.icon}</div>
                <p>{item.contact}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-20 ">
        <p className="inline-block pb-3 mb-10 text-3xl font-bold text-gray-900 capitalize border-b-4 border-sky-500">
          My Socials
        </p>
        <div className="flex flex-wrap justify-between gap-5">
          {socialDetails.map((social) => (
            <a
              href={social.href}
              key={social.id}
              target="_blank"
              className="flex gap-5 text-gray-500 group hover:text-black"
              rel="noreferrer">
              <span>{social.child}</span>
              <p className=" group-hover:underline">{social.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 my-20 md:flex-row md:gap-0">
        <Image
          src="/assets/images/contact.svg"
          width={300}
          height={300}
          alt="contact.svg"
        />
        <form action="" ref={form} onSubmit={sendEmail} className="md:w-96">
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="user_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
              placeholder=" "
              required
              ref={emailRef}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="user_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
              placeholder=" "
              required
              ref={nameRef}
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="message"
              id="floating_textarea"
              className="block py-2.5 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
              placeholder=" "
              rows={10}
              required
              ref={messageRef}></textarea>
            <label
              htmlFor="floating_textarea"
              className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Message
            </label>
          </div>
          <button
            type="submit"
            className={` text-white ${
              submitBg
                ? " bg-green-400"
                : "bg-gradient-to-r from-sky-500 to-blue-500"
            }  py-3 px-8 rounded-md ${submitBg ? "" : "cursor-pointer"}`}
            disabled={submitBg}>{`${
            loader ? "Sending . . ." : submitValue
          } `}</button>
        </form>
      </div>
      <NextPage
        message="Sometimes I write things related to programming, you can find there. 👉"
        href="blogs"
      />
    </section>
  );
};

export default Contact;
