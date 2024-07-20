"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import gsap from "gsap";
import BreadCumb from "../layout/BreadCumb";

const team = [
  {
    name: "Quan Nguyen",
    role: "Business Analyst",
    image: "/images/member.png",
  },
  {
    name: "Giang Pham",
    role: "Chief Executive Officer",
    image: "/images/member.png",
  },
  { name: "Duc Tun", role: "UI-UX Designer", image: "/images/member.png" },
];

const Member = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const updateInfo = useCallback((slideNumber) => {
    const member = team[slideNumber - 1];
    const info = document.querySelector(".info");
    if (info) {
      const nameElement = info.querySelector(".name");
      const roleElement = info.querySelector(".role");
      if (nameElement) nameElement.textContent = member.name;
      if (roleElement) roleElement.textContent = member.role;
    }
  }, []);

  const animateSlide = useCallback((oldSlideNumber, newSlideNumber) => {
    const oldMarquee = document.querySelector(
      `.t-${oldSlideNumber}.marquee-wrapper`
    );
    const oldImg = document.getElementById(`t-${oldSlideNumber}`);
    const newMarquee = document.querySelector(
      `.t-${newSlideNumber}.marquee-wrapper`
    );
    const newImg = document.getElementById(`t-${newSlideNumber}`);

    gsap.to([oldMarquee, oldImg], {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power4.out",
      onComplete: () => {
        gsap.to([newMarquee, newImg], {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 0.5,
          ease: "power4.out",
          delay: 0.1,
        });
      },
    });
  }, []);

  const handleRightClick = useCallback(() => {
    if (currentSlide < totalSlides) {
      animateSlide(currentSlide, currentSlide + 1);
      setCurrentSlide((prev) => prev + 1);
      updateInfo(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, animateSlide, updateInfo]);

  const handleLeftClick = useCallback(() => {
    if (currentSlide > 1) {
      animateSlide(currentSlide, currentSlide - 1);
      setCurrentSlide((prev) => prev - 1);
      updateInfo(currentSlide - 1);
    }
  }, [currentSlide, animateSlide, updateInfo]);

  const handleClick = useCallback(
    (e) => {
      const xPosition = e.clientX;
      const halfPageWidth = window.innerWidth / 2;
      if (xPosition > halfPageWidth) {
        handleRightClick();
      } else {
        handleLeftClick();
      }
    },
    [handleRightClick, handleLeftClick]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    updateInfo(currentSlide);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick, updateInfo, currentSlide]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    updateInfo(currentSlide);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick, updateInfo, currentSlide]);

  return (
    <div style={{padding: "48px 0"}}>
      <BreadCumb title={"ĐỘI NGŨ CỦA DOTS"}/>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "1240px",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
              className="t-1 marquee-wrapper"
            >
              <h1
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-100%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  fontSize: "100px",
                  textTransform: "uppercase",
                  width: "100%",
                  whiteSpace: "nowrap",
                  animation: "marquee 10s linear infinite",
                  color: "white",
                }}
              >
                Business Analyst Business Analyst Business Analyst
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
              className="t-2 marquee-wrapper"
            >
              <h1
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-100%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  fontSize: "100px",
                  textTransform: "uppercase",
                  width: "100%",
                  whiteSpace: "nowrap",
                  animation: "marquee 10s linear infinite",
                  color: "white",
                }}
              >
                Digital Marketing Digital Marketing Digital Marketing Digital
                Marketing Digital Marketing Digital Marketing
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
              className="t-3 marquee-wrapper"
            >
              <h1
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-100%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  fontSize: "100px",
                  textTransform: "uppercase",
                  width: "100%",
                  whiteSpace: "nowrap",
                  animation: "marquee 10s linear infinite",
                  color: "white",
                }}
              >
                UI-UX Designer UI-UX Designer UI-UX Designer UI-UX Designer
                UI-UX Designer UI-UX Designer
              </h1>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "700px",
            }}
          >
            <div style={{ width: "100%", height: "600px" }}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "600px",
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                }}
                id="t-1"
              >
                <img className="image" src="/images/member.png" alt="member" />
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "600px",
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
                id="t-2"
              >
                <img className="image" src="/images/member.png" alt="member" />
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "600px",
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
                id="t-3"
              >
                <img className="image" src="/images/member.png" alt="member" />
              </div>
            </div>

            <div className="info">
              <p className="name"></p>
              <p className="role" style={{ margin: "5px 0" }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
