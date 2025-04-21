"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Images = [1, 2, 3, 4, 5, 6];

export default function ImageScrollPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const backGround = useTransform(scrollYProgress, [0.6, 1], ["#000", "#fff"]);

  return (
    <motion.div
      style={{ backgroundColor: backGround }}
      ref={scrollRef}
      className="h-[500vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-20">
          {Images.map((i) => (
            <motion.div
              key={i}
              className="relative h-[80vh] w-[60vh] flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ y: -20, scale: 1.08 }}
            >
              <Image
                src={`/img-${i}.jpg`}
                fill
                alt={`img-${i}`}
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
