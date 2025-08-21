// "use client";

// import { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
// import { TypeAnimation } from "react-type-animation";

// const Hero = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       const offsetTop = aboutSection.offsetTop;
//       window.scrollTo({
//         top: offsetTop - 80, // Adjust for header height
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center justify-center"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0" />

//       <div className="container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="mb-6 inline-block"
//           >
//             <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
//               MERN Stack Developer
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="mb-6 leading-tight"
//           >
//             Hi, I&apos;m Sulthan Basha — I build{" "}
//             <span className="gradient-text">
//               <TypeAnimation
//                 sequence={[
//                   "intelligent",
//                   1000,
//                   "efficient",
//                   1000,
//                   "responsive",
//                   1000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Number.POSITIVE_INFINITY}
//               />
//             </span>{" "}
//             web apps.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="mb-10 text-lg text-gray-400 max-w-2xl mx-auto"
//           >
//             I’m a Frontend Developer passionate about building clean,
//             responsive, and engaging web & mobile applications
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <Button
//               size="lg"
//               className="rounded-full bg-primary hover:bg-primary/90"
//               asChild
//             >
//               <a
//                 href="/Resume_Updated.docx"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 download
//               >
//                 <Download size={18} className="mr-2" />
//                 Download Resume
//               </a>
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               className="rounded-full"
//               asChild
//             >
//               <Link
//                 href="https://github.com/sulthan0001"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github size={18} className="mr-2" />
//                 GitHub
//               </Link>
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="rounded-full"
//               asChild
//             >
//               <Link
//                 href="https://www.linkedin.com/in/sulthan-basha-2b0946253"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Linkedin size={18} className="mr-2" />
//                 LinkedIn
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//       >
//         <Button
//           variant="ghost"
//           size="icon"
//           className="rounded-full animate-bounce"
//           onClick={scrollToAbout}
//           aria-label="Scroll to About section"
//         >
//           <ArrowDown size={24} />
//         </Button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0" />

      <div className="container relative z-10">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-7/12 text-center pl-20 md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                MERN Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 leading-tight lg:text-5xl md:text-3xl font-bold"
            >
              Hi, I&apos;m Sulthan Basha — I build{" "}
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    "intelligent",
                    1000,
                    "efficient",
                    1000,
                    "responsive",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </span>{" "}
              web apps.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-10 text-lg text-gray-400 max-w-2xl"
            >
              I’m a Frontend Developer passionate about building clean,
              responsive, and engaging web & mobile applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 md:justify-start justify-center"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90"
                asChild
              >
                <a
                  href="/Resume_Updated.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://github.com/sulthan0001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-2" />
                  GitHub
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/sulthan-basha-2b0946253"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full md:w-5/12 flex justify-center"
          >
            <Image
              src="/sulthan-profile.jpg" // replace with your image path
              alt="Sulthan Basha"
              width={300}
              height={200}
              className="rounded-full shadow-xl border-4 border-primary object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce"
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
