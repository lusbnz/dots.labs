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
  useEffect(() => {
    gsap.fromTo(
      ".product .hero",
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 2,
        duration: 3,
        scale: 1,
        opacity: 1,
        ease: "expo.inOut",
      }
    );
  }, []);

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
          width={1248}
          height={800}
        />
      </div>
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
        style={{ fontSize: "12px", right: "130px", bottom: "240px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        SCROLL TO VIEW MORE
        <Image src="/icons/arrow-down.svg" alt="arrow" width={8} height={8} />
      </motion.span>
      <motion.span
        className="absolute"
        style={{ fontSize: "360px", bottom: "-24px", left: "80px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <Image src={D} alt="D" style={{ width: "420px", height: "520px" }} />
      </motion.span>
      <motion.span
        className="absolute"
        style={{
          fontSize: "200px",
          bottom: "-40px",
          left: "360px",
          fontFamily: "PPRader",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        OTS AGENCY
      </motion.span>
    </div>
  );
};

export default Hero;
