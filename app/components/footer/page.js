import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.wrapper}>
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
            width={20}
            height={20}
            className="image"
          />
          <Image
            src="/icons/Pinterest.svg"
            alt="LogoP"
            width={20}
            height={20}
            className="image"
          />
          <Image
            src="/icons/Tiktok.svg"
            alt="LogoT"
            width={20}
            height={20}
            className="image"
          />
          <Image
            src="/icons/Instagram.svg"
            alt="LogoI"
            width={20}
            height={20}
            className="image"
          />
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-4 items-start">
            <span style={{ color: "rgba(255, 255, 255, 0.20)" }}>Email</span>
            <span>dotsagency.info@gmail.com</span>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <span style={{ color: "rgba(255, 255, 255, 0.20)" }}>Hotline</span>
            <span>09328739244</span>
          </div>
        </div>
        <div>2024 © Dots Co., Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;