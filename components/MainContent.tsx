"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/navigation";

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const letters = text.split("");

  return (
    <span>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.02,
            delay: delay * index,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function Main({
  projectPageRef,
}: {
  projectPageRef: React.RefObject<HTMLDivElement | null>;
}) {
  const handleScrollToProjects = () => {
    projectPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();

  return (
    <div className="w-full min-h-full px-6 py-16 lg:px-16 relative overflow-hidden font-sans">
      {/* Rest of your content remains the same */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-slate-900 dark:text-slate-400 font-medium tracking-wide">
            <TypewriterText text="Full-Stack Developer" delay={0} />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
        >
          Crafting Digital
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Experiences</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900/50 z-0 opacity-70"></span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <TypewriterText
            text="Hi, I'm Aswin — I craft fast, accessible, and visually engaging web applications that leave a lasting impression."
            delay={0.04}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-6 items-center"
        >
          <Button
            className="py-6 px-8 rounded-full cursor-pointer"
            onClick={handleScrollToProjects}
          >
            View Projects
          </Button>

          <Button
            variant="outline"
            className="py-6 px-8 rounded-full cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </Button>

          <div className="flex items-center space-x-4">
            <a target="_blank" href="https://github.com/ASWINKMANOJ">
              <span className="sr-only">GitHub</span>
              <AiFillGithub fontSize={36} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aswin-k-manoj/"
            >
              <span className="sr-only">LinkedIn</span>
              <AiFillLinkedin fontSize={36} />
            </a>
          </div>
        </motion.div>

        {/* Tech stack floating tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {[
            "React",
            "Next.js",
            "Flutter",
            "TypeScript",
            "React Native",
            "GraphQL",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
