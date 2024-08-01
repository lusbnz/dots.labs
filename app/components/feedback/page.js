"use client"

import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import BreadCumb from "../layout/BreadCumb";
import FeedbackImage from "@/public/images/feedback.svg";
import Image from "next/image";

const feedbacks = [
  {
    quote:
      "“Just like the shape, size and colour of your stand, lighting can bring focus and draw potential customers in. It not only enhances the visual appeal of your stand but also highlights Artemide is committed to sustainability with EPD certification for Alphabet of Light. A step forward towards”",
    author: "Anaconda Tran",
    position: "Head Marketing at HOA CLUB",
    projects: "5 Project",
    collaborations: "+100 Collaboration",
  },
  {
    quote:
      "“ABC DEF GHI ABC DEF GHI ABC DEF GHI ABC DEF GHI ABC DEF GHI ABC DEF GHI ABC DEF GHI ABC DEF GHI ABC DEF GHI ”",
    author: "Anaconda Tran",
    position: "Head Marketing at HOA CLUB",
    projects: "5 Project",
    collaborations: "+100 Collaboration",
  },
  {
    quote:
      "“Just like the shape, size and colour of your stand, lighting can bring focus and draw potential customers in. It not only enhances the visual appeal of your stand but also highlights Artemide is committed to sustainability with EPD certification for Alphabet of Light. A step forward towards”",
    author: "Anaconda Tran",
    position: "Head Marketing at HOA CLUB",
    projects: "5 Project",
    collaborations: "+100 Collaboration",
  },
];

const Feedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((currentFeedback + 1) / feedbacks.length) * 100);
  }, [currentFeedback]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setAnimating(true);
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
      setTimeout(() => {
        setAnimating(false);
      }, 500);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (animating) return;
    setDirection("next");
    setAnimating(true);
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("prev");
    setAnimating(true);
    setCurrentFeedback(
      (prev) => (prev - 1 + feedbacks.length) % feedbacks.length
    );
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handleClick = (e) => {
    if (animating) return;
    const { clientX, currentTarget } = e;
    const middle = currentTarget.offsetWidth / 2;
    if (clientX > middle) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const getNewAnimationClass = () => {
    if (!animating) return "";
    return direction === "next"
      ? style.slideInFromRight
      : style.slideInFromLeft;
  };

  return (
    <>
      <BreadCumb title={"KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI"} />
      <div className={style.wrapper} onClick={handleClick}>
        <div
          style={{
            margin: "35px 0 55px 0",
            width: "100%",
            height: "4px",
            backgroundColor: "#000000",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#ffffff",
              transition: "width 0.5s ease",
            }}
          ></div>
        </div>
        <div className="flex justify-between w-100 h-100">
          <div className="flex items-start gap-[16px]">
            <span className="flex items-center relative w-[80px]">
              <Image
                src={FeedbackImage}
                alt="feedback"
                width={36}
                height={36}
              />
              <Image
                src={FeedbackImage}
                alt="feedback"
                width={36}
                height={36}
                style={{ position: "absolute", left: "16px" }}
              />
              <Image
                src={FeedbackImage}
                alt="feedback"
                width={36}
                height={36}
                style={{ position: "absolute", left: "32px" }}
              />
              <Image
                src={FeedbackImage}
                alt="feedback"
                width={36}
                height={36}
                style={{ position: "absolute", left: "48px" }}
              />
            </span>
            <span style={{ opacity: "0.5" }}>
              {feedbacks[currentFeedback].collaborations}
            </span>
            <span style={{ opacity: "0.5" }}>
              {feedbacks[currentFeedback].projects}
            </span>
          </div>
          <div
            className={`flex flex-col gap-[52px] ${style.feedbackItem}`}
            style={{
              maxWidth: "666px",
              animationName: animating ? getNewAnimationClass() : "",
            }}
          >
            <span style={{ maxWidth: "666px", fontSize: "28px" }}>
              {feedbacks[currentFeedback].quote}
            </span>
            <span
              style={{ fontSize: "16px", display: "inline-flex", gap: "10px" }}
            >
              <p>{feedbacks[currentFeedback].author}</p>
              <p style={{ opacity: 0.4 }}>
                {" "}
                - {feedbacks[currentFeedback].position}
              </p>
            </span>
          </div>
          <div style={{ fontSize: "62px" }}>
            <span>{String(currentFeedback + 1).padStart(2, "0")}</span>
            <span style={{ opacity: "0.2" }}>
              /{String(feedbacks.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
