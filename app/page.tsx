"use client";
import { useEffect, useRef } from "react";
import HomePage from "@/components/pages/HomePage";
import ScrollPage from "@/components/pages/ScrollPage";
import ImagesPage from "@/components/pages/ImageScrollPage";
import ProjectPage from "@/components/pages/ProjectPage";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function Home() {
  const projectPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1, // Adjust smoothness (lower = smoother)
      smoothWheel: true,
      infinite: false, // Set to true if you want infinite scroll
    });

    // Animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <HomePage projectPageRef={projectPageRef} />
      <ScrollPage />
      <ImagesPage />
      <div ref={projectPageRef}>
        <ProjectPage />
      </div>
    </>
  );
}
