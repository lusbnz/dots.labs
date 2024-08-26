"use client"

import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import gsap from "gsap";
import './style.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const images = footerRef.current.querySelectorAll('.image');
    
    gsap.fromTo(images, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: 'expo.inOut',
    },{
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'expo.inOut',
    });
  }, []);
  return (
    <div ref={footerRef} className={style.wrapper}>
      <div className="flex justify-between items-center">
        <div>
          <video
            src="/videos/about-video.mp4"
            autoPlay
            loop
            muted
            className="h-[120px]"
          />
        </div>
        <div className="flex gap-4">
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
      <div className="flex justify-between items-end">
        <div className="left-footer flex items-center">
          <div className="flex flex-col gap-4 items-start">
            <span className="first-footer" style={{ color: "rgba(255, 255, 255, 0.20)" }}>Email</span>
            <span className="second-footer">dotsagency.info@gmail.com</span>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <span className="first-footer" style={{ color: "rgba(255, 255, 255, 0.20)" }}>Hotline</span>
            <span className="second-footer">09328739244</span>
          </div>
        </div>
        <div className="right-footer">2024 © Dots Co., Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;
