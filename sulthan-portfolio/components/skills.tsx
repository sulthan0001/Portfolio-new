"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.Js", level: 90 },
  { name: "Redux", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 50 },
  { name: "Tailwind CSS", level: 100 },
  { name: "Bootsrap", level: 100 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "React Native", level: 80 },
  { name: "Github", level: 100 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Skills</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-sm font-medium font-mono">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">C/C++</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">
                JavaScript
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">
                TypeScript
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Python</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">HTML</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">CSS</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">
                TailwindCSS
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Shadcn</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">MongoDB</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">
                Express.Js
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">React.Js</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Node.js</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">SQL</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Firebase</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Git</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Github</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
