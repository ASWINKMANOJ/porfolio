"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";
import { useRouter } from "next/navigation";
export default function Contact() {
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const formItemHover = {
    scale: 1.01,
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-start justify-between px-4 sm:px-8 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 gap-6 md:gap-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans"
      >
        Let&apos;s Start a Project <br />
        Together
      </motion.h1>

      <motion.form
        variants={containerVariants}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          router.replace("/");
        }}
        className="flex-col w-full gap-4 items-center justify-center flex mt-8 sm:mt-12"
      >
        {/* Name Field */}
        <motion.div
          variants={itemVariants}
          whileHover={formItemHover}
          className="h-auto min-h-[100px] sm:h-[120px] md:h-[140px] w-full pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 border-t border-t-gray-600 flex gap-3 sm:gap-4 items-center justify-center"
        >
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">1</span>
          <div className="flex flex-col w-full gap-2 sm:gap-3 md:gap-4 items-start justify-center">
            <label
              htmlFor="name"
              className="text-xl sm:text-2xl md:text-3xl font-sans"
            >
              What&apos;s Your Name ?
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="border-none outline-none font-sans w-full text-lg sm:text-xl"
            />
          </div>
        </motion.div>

        {/* Email Field */}
        <motion.div
          variants={itemVariants}
          whileHover={formItemHover}
          className="h-auto min-h-[100px] sm:h-[120px] md:h-[140px] w-full pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 border-t border-t-gray-600 flex gap-3 sm:gap-4 items-center justify-center"
        >
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">2</span>
          <div className="flex flex-col w-full gap-2 sm:gap-3 md:gap-4 items-start justify-center">
            <label
              htmlFor="email"
              className="text-xl sm:text-2xl md:text-3xl font-sans"
            >
              What&apos;s Your Email ?
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@example.com"
              className="border-none outline-none font-sans w-full text-lg sm:text-xl"
            />
          </div>
        </motion.div>

        {/* Organization Field */}
        <motion.div
          variants={itemVariants}
          whileHover={formItemHover}
          className="h-auto min-h-[100px] sm:h-[120px] md:h-[140px] w-full pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 border-t border-t-gray-600 flex gap-3 sm:gap-4 items-center justify-center"
        >
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">3</span>
          <div className="flex flex-col w-full gap-2 sm:gap-3 md:gap-4 items-start justify-center">
            <label
              htmlFor="organization"
              className="text-xl sm:text-2xl md:text-3xl font-sans"
            >
              What&apos;s Your Organization ?
            </label>
            <input
              type="text"
              name="organization"
              id="organization"
              placeholder="Your Organization"
              className="border-none outline-none font-sans w-full text-lg sm:text-xl"
            />
          </div>
        </motion.div>

        {/* Services Field */}
        <motion.div
          variants={itemVariants}
          whileHover={formItemHover}
          className="h-auto min-h-[100px] sm:h-[120px] md:h-[140px] w-full pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 border-t border-t-gray-600 flex gap-3 sm:gap-4 items-center justify-center"
        >
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">4</span>
          <div className="flex flex-col w-full gap-2 sm:gap-3 md:gap-4 items-start justify-center">
            <label
              htmlFor="services"
              className="text-xl sm:text-2xl md:text-3xl font-sans"
            >
              What service are you looking for ?
            </label>
            <input
              type="text"
              name="services"
              id="services"
              placeholder="Web Development, Design, etc."
              className="border-none outline-none font-sans w-full text-lg sm:text-xl"
            />
          </div>
        </motion.div>

        {/* Message Field */}
        <motion.div
          variants={itemVariants}
          whileHover={formItemHover}
          className="h-auto min-h-[140px] sm:h-[160px] md:h-[180px] w-full pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 border-t border-t-gray-600 flex gap-3 sm:gap-4 items-center justify-center"
        >
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">5</span>
          <div className="flex flex-col w-full gap-2 sm:gap-3 md:gap-4 items-start justify-center">
            <label
              htmlFor="message"
              className="text-xl sm:text-2xl md:text-3xl font-sans"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here..."
              className="border-none outline-none font-sans resize-none w-full text-lg sm:text-xl"
              rows={3}
            ></textarea>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 sm:mt-8 w-12 h-12 sm:w-24 sm:h-24 bg-black dark:bg-white text-white dark:text-black font-sans text-base sm:text-lg rounded-full flex items-center justify-center transition-colors duration-200"
        >
          Send
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
