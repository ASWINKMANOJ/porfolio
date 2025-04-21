"use client";
import { useState } from "react";
import styles from "./ProjectPage.module.css";
import Project from "@/components/Project";
import Modal from "../Modal";

const projects = [
  {
    title: "Task Manager",
    source: "/project-1.png",
    color: "#8C8C8C",
  },
  {
    title: "Pick Me Some",
    source: "/project-2.png",
    color: "#EFE8D3",
  },
  {
    title: "Travel Glide",
    source: "/project-3.webp",
    color: "#706D63",
  },
];

export default function ProjectPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
        <Modal projects={projects} modal={modal} />
      </div>
    </main>
  );
}
