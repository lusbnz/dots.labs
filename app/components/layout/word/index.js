"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import DOTS from "@/public/icons/DOST.svg";
import Image from "next/image";
import '../style.css';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ").map((word, index) =>
    word === "DOTS" || word === "DOTS," ? (
      <Image src={DOTS} alt="DOTS" key="DOTS" style={{ height: "120px", width: "160px" }} />
    ) : (
      word
    )
  );

  return (
    <p ref={container} className={`${styles.paragraph} paragraph`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return typeof word === "string" ? (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        ) : (
          <span key={i} style={{ display: "inline-block", marginRight: "5px" }}>
            {word}
          </span>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
