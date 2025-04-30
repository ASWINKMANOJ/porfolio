"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function EducationPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale the progress bar from 0 to full height
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleYSmooth = useSpring(scaleY, { damping: 20, stiffness: 100 });

  // Refs for each section
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Scroll progress for each section based on viewport center
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start center", "center center"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start center", "center center"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ["start center", "center center"],
  });

  // Animation values for each section
  const opacity1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);
  const y1 = useTransform(scrollYProgress1, [0, 1], ["20px", "0px"]);

  const opacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);
  const y2 = useTransform(scrollYProgress2, [0, 1], ["20px", "0px"]);

  const opacity3 = useTransform(scrollYProgress3, [0, 1], [0, 1]);
  const y3 = useTransform(scrollYProgress3, [0, 1], ["20px", "0px"]);

  return (
    <div className="w-full">
      {" "}
      {/* Prevent horizontal scroll */}
      <div className="flex items-center flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl">
          Education
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 min-h-screen w-full gap-6 mt-12 md:mt-24 max-w-6xl mx-auto"
          ref={containerRef}
        >
          <div className="hidden md:flex row-span-3 items-center justify-center relative">
            <div
              ref={trackRef}
              className="w-1 h-full relative bg-slate-200 rounded-full"
            >
              <motion.span
                ref={progressRef}
                style={{
                  scaleY: scaleYSmooth,
                  originY: 0, // Makes it grow from top to bottom
                }}
                className="w-1 h-full absolute top-0 left-0 bg-slate-800 rounded-full"
              />
            </div>
          </div>

          <motion.div
            ref={ref1}
            style={{ opacity: opacity1, y: y1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex items-center justify-start px-4 md:px-0"
          >
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl">
                Lovely Professional University
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-lg sm:text-xl md:text-2xl">Graduated: 2026</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            style={{ opacity: opacity2, y: y2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex items-center justify-start px-4 md:px-0"
          >
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl">
                GVHSS Puthenchira
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">Higher Secondary</p>
              <p className="text-lg sm:text-xl md:text-2xl">Graduated: 2020</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref3}
            style={{ opacity: opacity3, y: y3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex items-center justify-start px-4 md:px-0"
          >
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl">
                GVHSS Puthenchira
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">Higher School</p>
              <p className="text-lg sm:text-xl md:text-2xl">Graduated: 2018</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
