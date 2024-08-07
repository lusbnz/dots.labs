"use client";

import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const images = footerRef.current.querySelectorAll(".image");

    gsap.fromTo(
      images,
      {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "expo.inOut",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "expo.inOut",
      }
    );
  }, []);
  return (
    <div
      ref={footerRef}
      className={`w-screen`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifycontent: "space-between",
        gap: "4px",
        borderTop: "1px solid #e5e5e5",
        padding: "42px",
        height: "366px",
        overflow: "hidden"
      }}
    >
      <div className="flex justify-between items-center h-[200px] w-100 px-[42px]">
        <div>
          <video
            src="/videos/about-video.mp4"
            autoPlay
            loop
            muted
            className="h-[120px]"
          />
        </div>
        <div className="flex gap-[20px]">
          <Image
            src="/icons/Facebook.svg"
            alt="LogoF"
            width={30}
            height={30}
            className="image"
          />
          <Image
            src="/icons/Pinterest.svg"
            alt="LogoP"
            width={30}
            height={30}
            className="image"
          />
          <Image
            src="/icons/Tiktok.svg"
            alt="LogoT"
            width={30}
            height={30}
            className="image"
          />
          <Image
            src="/icons/Instagram.svg"
            alt="LogoI"
            width={30}
            height={30}
            className="image"
          />
        </div>
      </div>
      <div className="flex justify-between items-end h-100 w-100 px-[42px]">
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-[24px] items-start">
            <span className="text-[22px]" style={{ color: "rgba(255, 255, 255, 0.20)" }}>Email</span>
            <span className="text-[26px]">dotsagency.info@gmail.com</span>
          </div>
          <div className="flex flex-col gap-[24px] items-start">
            <span className="text-[22px]" style={{ color: "rgba(255, 255, 255, 0.20)" }}>Hotline</span>
            <span className="text-[26px]">09328739244</span>
          </div>
        </div>
        <div className="text-[20px]">2024 © Dots Co., Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;
