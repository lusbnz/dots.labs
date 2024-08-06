"use client";

import { useEffect, useRef, useState } from "react";
import About from "./components/about/page";
import Contact from "./components/contact/page";
import Feedback from "./components/feedback/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Insight from "./components/insight/page";
import StickyCursor from "./components/layout/StickyCursor";
import Member from "./components/member/page";
import Passion from "./components/passion/page";
import Service from "./components/service/page";
import Video from "./components/video/page";
import Image from "next/image";
import ArrowButton from "@/public/icons/arrow-down.svg";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="relative flex flex-col items-center">
      <div className="relative w-screen">
        <StickyCursor containerRef={containerRef} />
        <Header />
        <Hero />
        <Video />
        <About />
        <Service />
        <Passion containerRef={containerRef} />
        <Member />
        <Feedback />
        <Contact containerRef={containerRef} />
        <Insight />
        <Footer />

        <div
          className="absolute"
          style={{
            zIndex: 9999,
            width: "60px",
            height: "60px",
            borderRadius: "100%",
            backgroundColor: "transparent",
            border: "1px solid #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: "60px",
            bottom: `1000px`,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={ArrowButton}
            alt=""
            width={24}
            height={24}
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </div>
    </main>
  );
}
