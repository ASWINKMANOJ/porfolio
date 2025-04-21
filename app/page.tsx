"use client";
import HomePage from "@/components/pages/HomePage";
import ScrollPage from "@/components/pages/ScrollPage";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import ImagesPage from "@/components/pages/ImageScrollPage";
import ProjectPage from "@/components/pages/ProjectPage";

export default function Home() {
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
      <HomePage />
      <ScrollPage />
      <ImagesPage />
      <ProjectPage />
    </>
  );
}
