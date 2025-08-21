"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = ({
  largePicture = false,
  showActions = false,
  glow = false,
}: {
  largePicture?: boolean;
  showActions?: boolean;
  glow?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const imageSize = largePicture ? 192 : 128;
  const imageClass = largePicture ? "w-48 h-48" : "w-32 h-32";
  const cardPadding = largePicture ? "p-10" : "p-6";

  return (
    <section id="about" className=" bg-pray-900/30 w-full relative pt-5">
<div className="w-full max-w-none px-4 sm:px-6 lg:px-8 mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="w-full items-center">
            <div className=" flex justify-center md:justify-start">
              <Card
                className={` w-full mx-auto ${cardPadding} rounded-2xl shadow-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 flex flex-col items-center transition-all duration-300 ${
                  glow ? "ring-4 ring-green-400 ring-offset-2 animate-glow" : ""
                }`}
              >
                <h2 className="section-title gradient-text">About Me</h2>
                <div
                  className={`${imageClass} rounded-full overflow-hidden border-4 border-primary/30 mb-4`}
                >
                  <Image
                    src="/sulthan-profile.jpg"
                    alt="Sulthan Basha"
                    width={imageSize}
                    height={imageSize}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs text-primary font-semibold tracking-widest mb-1">
                    MERN STACK DEVELOPER
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    Sulthan Basha
                  </div>
                  <div className="text-sm text-gray-300 mb-4">
                    Building Web applications and Native apps
                  </div>
                </div>
                {showActions && (
                  <div className="flex flex-col items-center w-full mt-4 gap-4">
                    <div className="flex flex-row gap-3 mb-2">
                      <a
                        href="https://www.linkedin.com/in/sulthan-basha-2b0946253"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-800 p-2 hover:bg-primary/80 transition"
                      >
                        <FaLinkedin size={24} color="#22d3ee" />
                      </a>
                      <a
                        href="https://github.com/sulthan0001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-800 p-2 hover:bg-primary/80 transition"
                      >
                        <FaGithub size={24} color="#22d3ee" />
                      </a>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                      <a
                        href="/frontendresume.pdf"
                        download
                        className="flex-1 rounded-xl bg-primary text-white p-2 font-semibold text-center hover:bg-primary/90 transition"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        className="flex-1 rounded-xl bg-primary text-white p-2 font-semibold text-center hover:bg-primary/80 transition"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            <div className="md:col-span-3 space-y-6 text-lg text-gray-300">
              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Passionate full stack developer who builds AI-driven and automation-first applications.
              </motion.p> */}

              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Strong background in ReactJs, NextJs, PostgreSQL, and modern JS tooling.
              </motion.p> */}

              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                As a final-year B.Tech Computer Science and manufacturing student at IIITDM Kancheepuram (2022-2026), I combine theoretical knowledge
                with practical experience to create efficient, user-friendly applications. I'm particularly interested
                in leveraging AI to solve real-world problems and improve user experiences.
              </motion.p> */}

              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I'm currently seeking full-time opportunities where I can contribute my skills in full-stack development
                and continue growing as a developer.
              </motion.p> */}

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="pt-4"
              >
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                    <span className="font-mono">B.Tech CS </span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                    <span className="font-mono">IIITDM Kancheepuram</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                    <span className="font-mono">2022 - 2026</span>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
