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
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    async function getLoader() {
      const { helix } = await import("ldrs");
      helix.register();
    }
    getLoader();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMainContent(true);
    }, 300);
  }, []);

  return (
    <main className="relative flex flex-col items-center overflow-x-hidden">
      {!showMainContent && (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
          <l-helix size="100" speed="2.5" color="white"></l-helix>
        </div>
      )}
      {showMainContent && (
        <div className="relative w-screen overflow-x-hidden">
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
        </div>
      )}
    </main>
  );
}
