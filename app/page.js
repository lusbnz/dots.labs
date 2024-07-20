"use client";

import { useRef } from "react";
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

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="flex flex-col">
      <StickyCursor containerRef={containerRef} />
      <Header />
      <Hero />
      <Video />
      <About />
      <Service />
      <Passion />
      <Member />
      <Feedback />
      <Contact containerRef={containerRef} />
      <Insight />
      <Footer />
    </main>
  );
}
