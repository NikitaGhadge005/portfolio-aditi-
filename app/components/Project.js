"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description:
      "This is a brief description of Project One. It showcases my skills in React",
    img: "/projects/pro1.png",
    techtags: ["#React", "#Node.js", "#MongoDB"],
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    description:
      "This is a brief description of Project Two. It highlights my backend knowledge.",
    img: "/projects/pro2.png",
    techtags: ["#Express", "#MongoDB", "#API"],
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    description:
      "This is a brief description of Project Three. It demonstrates frontend + backend integration.",
    img: "/projects/pro3.png",
    techtags: ["#React", "#TailwindCSS", "#Node.js"],
    github: "https://github.com/yourusername/project3",
  },
  
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-30 bg-[#03050C] text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
         Projects{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6B5BFF]">
         .
        </span>
      </motion.h2>
       <div className="w-32 h-1 bg-gradient-to-l from-transparent via-[#915EFF] to-transparent rounded-full origin-center" />



      <p className="text-gray-400 mb-12 max-w-2xl mt-4">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories. It reflects my ability to solve complex problems,
        work with different technologies, and manage projects effectively.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20 md:px-10 sm:px-0">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#1a1a2e] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-40 object-cover  rounded-3xl p-3"
            />
            <div className="p-3">
            <h className="text-lg font-semibold mb-2">{proj.title}</h> {/* smaller heading */}
  <p className="text-sm text-gray-400 mb-4">{proj.description}</p> {/* smaller paragraph */}

               {/* Tech tags */}
  <div className="flex flex-wrap gap-2 mb-4">
    {proj.techtags.map((tag, i) => (
      <span
        key={i}
        className="text-xs text-[#915EFF] bg-[#2a2a40] px-3 py-1 rounded-full"
      >
        {tag}
      </span>
    ))}
  </div>

              {/* GitHub Icon */}
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <FaGithub size={20} /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
