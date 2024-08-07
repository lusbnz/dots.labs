"use client";

import React, { useEffect } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import moment from "moment";
import "./style.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import D from "@/public/icons/D.svg";

const Hero = () => {
  return (
    <div
      className={style.wrapper}
      style={{
        background:
          "linear-gradient(180deg, #16160E 0%, #1D1F18 9.9%, #6C848D 100%)",
      }}
    >
      <div className="hero-image">
        <Image
          className="hero"
          src="/images/hero.gif"
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>
      <motion.span
        className="absolute flex gap-2"
        style={{ fontSize: "18px", left: "160px", bottom: "360px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        WE ARE
      </motion.span>
      <motion.div
        className="absolute flex gap-2"
        style={{ fontSize: "18px", left: "520px", bottom: "360px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span>HANOI</span>
        {moment().format("h:mm A")}
      </motion.div>
      <motion.span
        className="absolute flex gap-2"
        style={{ fontSize: "18px", right: "42px", bottom: "360px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        SCROLL TO VIEW MORE
        <Image src="/icons/arrow-down.svg" alt="arrow" width={8} height={8} />
      </motion.span>
      <motion.span
        className="absolute"
        style={{ fontSize: "360px", bottom: "96px", left: "42px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <Image src={D} alt="D" style={{ width: "520px", height: "420px" }} />
      </motion.span>
      <motion.span
        className="absolute"
        style={{
          fontSize: "286px",
          bottom: "-40px",
          left: "380px",
          fontFamily: "PPRader",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        OTS  AGENCY
      </motion.span>
    </div>
  );
};

export default Hero;
