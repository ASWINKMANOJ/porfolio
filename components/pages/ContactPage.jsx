"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen px-6 sm:px-12 md:px-24 lg:px-28 py-12 md:py-24 flex flex-col"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-sans mb-8 md:mb-12"
      >
        Get in Touch
      </motion.h1>

      <motion.form
        variants={containerVariants}
        className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl"
      >
        <motion.div
          variants={itemVariants}
          whileHover={hoverEffect}
          className="border-b border-gray-600 pb-4"
        >
          <label className="block text-base sm:text-lg mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent outline-none text-lg sm:text-xl"
            placeholder="John Doe"
            name="name"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={hoverEffect}
          className="border-b border-gray-600 pb-4"
        >
          <label className="block text-base sm:text-lg mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            className="w-full bg-transparent outline-none text-lg sm:text-xl"
            placeholder="hello@example.com"
            name="email"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={hoverEffect}
          className="border-b border-gray-600 pb-4"
        >
          <label className="block text-base sm:text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full bg-transparent outline-none text-lg sm:text-xl resize-none min-h-[100px] sm:min-h-[120px]"
            placeholder="What would you like to discuss?"
            name="message"
          />
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#333",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 md:mt-8 w-32 h-32 sm:w-40 sm:h-40 cursor-pointer dark:bg-white dark:text-black bg-black text-white rounded-full text-base sm:text-lg flex items-center justify-center"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
