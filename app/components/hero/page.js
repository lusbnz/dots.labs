"use client";

import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import moment from "moment";
import "./style.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <Image src="/images/hero.gif" alt="hero" width={1248} height={800} />
      <motion.span
        className="absolute flex gap-2"
        style={{ fontSize: "12px", left: "180px", bottom: "240px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        WE ARE
      </motion.span>
      <motion.div
        className="absolute flex gap-2"
        style={{ fontSize: "12px", left: "500px", bottom: "240px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span>HANOI</span>
        {moment().format("h:mm A")}
      </motion.div>
      <motion.span
        className="absolute flex gap-2"
        style={{ fontSize: "12px", right: "160px", bottom: "240px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        SCROLL TO VIEW MORE
        <Image src="/icons/arrow-down.svg" alt="arrow" width={8} height={8} />
      </motion.span>
      <motion.span
        className="absolute"
        style={{ fontSize: "200px", bottom: "0px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        DOTS AGENCY
      </motion.span>
    </div>
  );
};

export default Hero;