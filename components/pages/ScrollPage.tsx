"use client";
import styles from "./ScrollPage.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import { useScroll, motion, useTransform } from "motion/react";
import { useTheme } from "next-themes";

export default function ScrollPage() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const main = useRef(null);
  const { resolvedTheme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: main,
    offset: ["start center", "end center"],
  });

  let xPercent = 0;
  let direction = -1;

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.75],
    ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0.4, 0.75],
    [
      resolvedTheme === "dark" ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
      "rgba(255,255,255,1)",
    ]
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.main
      ref={main}
      className={styles.main}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={cn(styles.sliderContainer, "dark:text-white")}>
        <div
          ref={slider}
          className={cn(styles.slider, "sm:text-[240px] text-[120px]")}
        >
          <motion.p
            className={cn("font-sans", { color: textColor })}
            ref={firstText}
          >
            Fullstack Developer -
          </motion.p>
          <motion.p
            className={cn("font-sans", { color: textColor })}
            ref={secondText}
          >
            Fullstack Developer -
          </motion.p>
        </div>
      </div>
    </motion.main>
  );
}
