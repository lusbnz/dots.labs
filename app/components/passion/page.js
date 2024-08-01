"use client"

import React, { useState } from "react";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";
import { motion } from "framer-motion";
import D from "@/public/icons/D.svg";
import Image from "next/image";

const paragraph =
  "DOTS là ngôi nhà của những gã 'trẻ mà không non nghề' đam mê thiết kế phát triển website và xây dựng thương hiệu chuyên nghiệp";

const dots = [
  { id: "D", word: "iscipline", top: "600px", left: "240px" },
  { id: "O", word: "perator", top: "300px", left: "480px" },
  { id: "T", word: "ransaction", top: "660px", left: "720px" },
  { id: "S", word: "uccessful", top: "480px", left: "1080px" },
];

const lines = [
  { d: "M360 600 L500 432" },
  { d: "M560 460 L748 680" },
  { d: "M880 700 L1092 600" },
  { d: "M640 380 L1092 520" },
  { d: "M400 690 L720 740" },
];

const Passion = () => {
  const [activeDiv, setActiveDiv] = useState("D");

  const getDivStyle = (id) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: activeDiv === id ? "#000000" : "rgba(255, 255, 255, 0.30)",
    fontSize: activeDiv === id ? "24px" : "96px",
    zIndex: "2",
    width: "160px",
    height: "160px",
    borderRadius: "100%",
    border: "1px solid rgba(255, 255, 255, 0.40)",
    backgroundColor: activeDiv === id ? "#C8D5BB" : "transparent",
    transition: "all 0.3s ease",
    transform: activeDiv === id ? "scale(1.2)" : "scale(1)",
  });

  const getLetterStyle = (id) => ({
    position: "absolute",
    transition: "all 0.3s ease",
    left: activeDiv === id ? "20px" : "50%",
    transform: activeDiv === id ? "translateX(0)" : "translateX(-50%)",
  });

  const getWordStyle = (id) => ({
    position: "absolute",
    transition: "all 0.3s ease-in-out",
    opacity: activeDiv === id ? 1 : 0,
    left: activeDiv === id ? "36px" : "50%",
    transform: activeDiv === id ? "translateX(0)" : "translateX(-50%)",
  });

  const calculateMidpoint = (x1, y1, x2, y2) => ({
    cx: (x1 + x2) / 2,
    cy: (y1 + y2) / 2,
  });

  const randomSize = () => Math.floor(Math.random() * 50);

  return (
    <div
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #16160E 0%, #1D1F18 9.9%, #6C848D 100%)",
      }}
    >
      <div className="flex gap-8 items-start absolute top-[48px] z-[2]">
        <BreadCumb title={"VỀ CHÚNG TÔI"} />
        {/* <Image src={D} alt="D" style={{ width: "110px", height: "90px", position: "absolute" }} /> */}
        <Paragraph paragraph={paragraph}/>
      </div>
      <div className="h-[120vh] relative">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#999999" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {lines.map(({ d }, i) => {
            const [M, L] = d.split(" L");
            const [x1, y1] = M.slice(1).split(" ").map(Number);
            const [x2, y2] = L.split(" ").map(Number);
            const { cx, cy } = calculateMidpoint(x1, y1, x2, y2);
            const size = randomSize();

            return (
              <React.Fragment key={i}>
                <motion.path
                  d={d}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.rect
                  x={cx - size / 2}
                  y={cy - size / 2}
                  width={size}
                  height={size}
                  fill="transparent"
                  stroke="#858C8D"
                  strokeWidth="1"
                  rx="50%"
                  ry="50%"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </React.Fragment>
            );
          })}
        </svg>
        {dots.map(({ id, word, top, left }) => {
          const randomMotion = () => ({
            x: [0, Math.random() * 40 - 20, 0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0, Math.random() * 40 - 20, 0],
          });

          return (
               <motion.div
              key={id}
              initial={{ x: 0, y: 0 }}
              animate={randomMotion()}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{ top, left, ...getDivStyle(id) }}
              onClick={() => setActiveDiv(id)}
            >
              <span style={getLetterStyle(id)}>{id}</span>
              <span style={getWordStyle(id)}>{word}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Passion;
