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
import D from "@/public/icons/D.svg";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="relative flex flex-col items-center overflow-x-hidden">
      <StickyCursor containerRef={containerRef} />
      <Header />
      <div
        className="w-screen"
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          alignItems: "end",
          justifyItems: "center",
          padding: "0 42px 66px 42px",
          position: "relative",
          background:
            "linear-gradient(180deg, #16160E 0%, #1D1F18 9.9%, #6C848D 100%)",
        }}
      >
        <div style={{ position: "absolute", height: "100vh", top: "-160px" }}>
          <Image
            className="hero"
            src="/images/hero.gif"
            alt="hero"
            width={1920}
            height={1080}
          />
        </div>
        <div
          style={{
            gridColumn: "span 3",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "absolute",
            marginLeft: "42px",
            marginBottom: "42px",
            left: "0px",
            bottom: "150px",
            zIndex: 1,
          }}
        >
          <Image src={D} alt="D" width={420} height={400} />
        </div>
        {[...Array(2)].map((_, index) => (
          <div key={index}></div>
        ))}

        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          O
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          T
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          S
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        ></div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          A
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          G
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          E
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          N
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          C
        </div>
        <div
          style={{
            gridColumn: "span 1",
            fontSize: "286px",
            fontFamily: "PPRader",
            color: "#FFFFFF",
            zIndex: 2,
          }}
        >
          Y
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        video
      </div>
      <div className="h-[500vh] pt-[120px]">hello world</div>
      <Footer />
    </main>
  );
}
