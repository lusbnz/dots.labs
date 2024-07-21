"use client";
import styles from "./index.module.css";
import { useState } from "react";
import Project from "./components/project";
import Modal from "./components/modal";
import BreadCumb from "../layout/BreadCumb";
import ActionButton from "../layout/ActionButton";

const projects = [
  {
    title: "Website Design and Development",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Branding",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Digital Marketing",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
];

export default function Service() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <BreadCumb title={"DỊCH VỤ CỦA CHÚNG TÔI"} />

      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>

      <div className="ml-8 mb-16">
        <ActionButton width={"280px"} height={"70px"} />
      </div>
    </>
  );
}
