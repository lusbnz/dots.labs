import React from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";
import FeedbackImage from "@/public/images/feedback.svg";
import Image from "next/image";

const Feedback = () => {
  return (
    <>
      <BreadCumb title={"KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI"} />
      <div className={style.wrapper}>
        <div
          style={{
            margin: "35px 0 55px 0",
            width: "100%",
            height: "4px",
            backgroundColor: "#bbbbbb",
            color: "#cccccc",
            borderRadius: "10px",
          }}
        ></div>
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
            <span style={{ opacity: "0.5" }}>+100 Collaboration</span>
            <span style={{ opacity: "0.5" }}>5 Project</span>
          </div>
          <div
            className="flex flex-col gap-[52px]"
            style={{ maxWidth: "666px" }}
          >
            <span style={{ maxWidth: "666px", fontSize: "28px" }}>
              “Just like the shape, size and colour of your stand, lighting can
              bring focus and draw potential customers in. It not only enhances
              the visual appeal of your stand but also highlights Artemide is
              committed to sustainability with EPD certification for Alphabet of
              Light. A step forward towards”
            </span>
            <span
              style={{ fontSize: "16px", display: "inline-flex", gap: "10px" }}
            >
              <p>Anaconda Tran </p>
              <p style={{ opacity: 0.4 }}> - Head Marketing at </p>
              <p>HOA CLUB</p>
            </span>
          </div>
          <div style={{ fontSize: "62px" }}>
            <span>02</span>
            <span style={{ opacity: "0.2" }}>/09</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
