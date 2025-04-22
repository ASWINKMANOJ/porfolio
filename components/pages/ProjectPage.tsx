"use client";
import { useState } from "react";
import styles from "./ProjectPage.module.css";
import Project from "@/components/Project";
import Modal from "../Modal";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Task Manager",
    source: "/project-1.png",
    color: "#8C8C8C",
    link: "https://github.com/ASWINKMANOJ/Task-Manager",
  },
  {
    title: "Pick Me Some",
    source: "/project-2.png",
    color: "#EFE8D3",
    link: "https://pick-me-some-dev.netlify.app/",
  },
  {
    title: "Travel Glide",
    source: "/project-3.webp",
    color: "#706D63",
    link: "https://github.com/ASWINKMANOJ/Travel_Glide",
  },
];

export default function ProjectPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className={cn(styles.main, "dark:bg-black")}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
              link={project.link}
            />
          );
        })}
        <Modal projects={projects} modal={modal} />
      </div>
    </main>
  );
}
