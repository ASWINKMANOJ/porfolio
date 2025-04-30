"use client";
import { useEffect, useRef } from "react";
import HomePage from "@/components/pages/HomePage";
import ProjectPage from "@/components/pages/ProjectPage";
import FooterComponent from "@/components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import dynamic from "next/dynamic";
import EducationPage from "@/components/pages/EducationPage";
import ContactPage from "@/components/pages/ContactPage";

export default function Home() {
  const projectPageRef = useRef<HTMLDivElement>(null);
  const ScrollPage = dynamic(() => import("../components/pages/ScrollPage"), {
    ssr: false,
  });
  const ImagesPage = dynamic(
    () => import("../components/pages/ImageScrollPage"),
    {
      ssr: false,
    }
  );

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
      <EducationPage />
      <div ref={projectPageRef}>
        <ProjectPage />
      </div>
      <ContactPage />
      <FooterComponent />
    </>
  );
}
