"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Employee Registration System",
      desc: "A fullstack Laravel application that manages employee data.",
      img: "ers/thumbnail.png",
      github: "https://github.com/swamhtetaung8/employee-management-system",
      images: [
        { src: "ers/ers-1.png", caption: "Login Page" },
        { src: "ers/ers-2.png", caption: "Register Page (Normal Register)" },
        { src: "ers/ers-3.png", caption: "Register Page (Excel Register)" },
        {
          src: "ers/ers-4.png",
          caption: "Employee List Page",
        },
        {
          src: "ers/ers-5.png",
          caption: "Employee Detail Page",
        },
        { src: "ers/ers-6.png", caption: "Edit Employee Page" },
        {
          src: "ers/ers-7.png",
          caption: "Employee List Page (Not Found state)",
        },
        { src: "ers/ers-8.png", caption: "Supports Multiple Language" },
        {
          src: "ers/ers-9.png",
          caption: "Register Page (Validation Error Page)",
        },
      ],
      techStacks: ["Laravel", "Bootstrap", "MySQL"],
    },
    {
      id: 2,
      title: "is ness",
      desc: "A sleek, user-friendly website for is~ness, a brand dedicated to creating natural body care products for new borns.",
      img: "isness/thumbnail.png",
      url: "https://is-ness.love",
      github: "https://github.com/swamhtetaung8/is-ness",
      images: [
        { src: "isness/isness-1.png", caption: "Hero Section" },
        { src: "isness/isness-2.png", caption: "More Information Section" },
        { src: "isness/isness-3.png", caption: "Ingredients Section" },
        {
          src: "isness/isness-4.png",
          caption: "Delivery Process Section",
        },
        {
          src: "isness/isness-5.png",
          caption: "Pricing Section",
        },
        { src: "isness/isness-6.png" },
        { src: "isness/isness-7.png", caption: "Footer" },
      ],
      techStacks: ["NextJs", "Mantine", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "CS:GO Match Analyzer",
      desc: "A web-based tool that converts raw CS:GO match logs into detailed, user-friendly match analytics and visualizations.",
      img: "csgo-match-analyzer/thumbnail-1.png",
      github: "https://github.com/swamhtetaung8/csgo-match-analyzer",
      images: [
        {
          src: "csgo-match-analyzer/thumbnail-1.png",
          caption: "Easily parse server logs to insightful dashboard.",
        },
        {
          src: "csgo-match-analyzer/thumbnail-2.png",
          caption:
            "Visualize match events, player statistics and detailed round-by-round breakdowns",
        },
      ],
      techStacks: ["Laravel", "InertiaJs", "ReactJs", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Simpuru",
      desc: "A mini ecommerce store featuring a product catalog, cart functionality, and checkout process.",
      img: "simpuru/thumbnail.png",
      url: "https://simpuru-ecommerce.vercel.app",
      images: [
        { src: "simpuru/simpuru-1.png", caption: "Hero Section" },
        { src: "simpuru/simpuru-2.png", caption: "Products Section" },
        { src: "simpuru/simpuru-3.png", caption: "Product Detail Page" },
        {
          src: "simpuru/simpuru-4.png",
          caption: "Product Detail Page (Added to cart)",
        },
        {
          src: "simpuru/simpuru-5.png",
          caption: "Products Section (Added to cart)",
        },
        { src: "simpuru/simpuru-6.png", caption: "Cart Page" },
        { src: "simpuru/simpuru-7.png", caption: "Cart Page Interactions" },
        { src: "simpuru/simpuru-8.png", caption: "Cart Page (Checkout state)" },
      ],
      techStacks: ["React", "Redux Toolkit", "Fake Store API", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen py-10">
      <h1 className="inline-block pb-3 mb-10 border-b-4 heading border-sky-500">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 my-5 rounded lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="block cursor-pointer space-y-5 overflow-hidden transition bg-white/50 border-2 border-gray-100 rounded-lg shadow-sm hover:border-sky-500 hover:shadow-lg dark:border-gray-600 dark:hover:shadow-lg dark:hover:shadow-slate-700 dark:bg-transparent dark:hover:border-sky-500"
          >
            <div className="relative md:h-[310px] lg:h-[300px] h-[180px]">
              <Image
                src={`/assets/images/projects/${project.img}`}
                className="object-cover object-top"
                alt={project.img}
                fill
              />
            </div>
            <div className="p-4 pt-0">
              <h3 className="mt-0.5 text-2xl font-medium text-gray-800 dark:text-slate-200">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-8 text-gray-600 dark:text-gray-400 md:text-base">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            onClick={() => setSelectedProject(null)} // Close modal when clicking backdrop
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white dark:bg-gray-900 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
              >
                <IoClose size={28} />
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 space-x-2">
                <span>{selectedProject.desc}</span>
              </p>

              <div className="space-x-2">
                {selectedProject.url && (
                  <span className="border-r-2 border-gray-600 pr-2">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      className="text-sky-500 hover:underline"
                    >
                      Visit Site
                    </a>
                  </span>
                )}

                {selectedProject.github && (
                  <span>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="text-sky-500 hover:underline"
                    >
                      Github
                    </a>
                  </span>
                )}
              </div>

              {selectedProject.techStacks &&
                selectedProject.techStacks.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </h3>
                    <ul className="mt-2 space-x-2 space-y-2">
                      {selectedProject.techStacks.map((tech, index) => (
                        <li
                          key={index}
                          className="inline-block text-sm bg-sky-500 rounded-full text-white p-1 px-3 hover:bg-sky-600 transition-all duration-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Image Carousel */}
              <div className="grid grid-cols-1 divide-y-[1px] divide-black/50">
                {selectedProject.images.map((img, index) => (
                  <div className="pb-4" key={index}>
                    <div className="relative w-full my-5 h-96">
                      <Image
                        src={`/assets/images/projects/${img.src}`}
                        alt={img.src}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 text-center">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
