"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
    <section id="contact" className="pt-10">
      <div className="max-w-xl space-y-3">
        <p className="inline-block pb-3 mb-10 border-b-4 heading border-sky-500">
          Contact
        </p>
      </div>
      <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-0">
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

        <Image
          src="/assets/images/contact.svg"
          width={300}
          height={300}
          alt="contact.svg"
        />
      </div>
    </section>
  );
};

export default Contact;
