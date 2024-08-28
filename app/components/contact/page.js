"use client";
import React, { useEffect, useRef } from "react";
import BreadCumb from "../layout/BreadCumb";
import Image from "next/image";
import ActionButton from "../layout/ActionButton";
import gsap from "gsap";
import B from "@/public/icons/B.svg";
import Mask from "@/public/images/mask-group.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ containerRef }) => {
  const charRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);

  return (
    <div>
      <BreadCumb title={"LIÊN HỆ"} />
      <div ref={containerRef} className="relative min-h-[100vh] p-20">
        <Image ref={charRef} src={B} alt="B" className="text-1"/>
        <span
          ref={titleRef}
          className="text-2"
          style={{
            position: "absolute",
            fontFamily: "PPRader",
          }}
        >
          ẮT ĐẦU KIẾN TẠO
        </span>
        <span
          ref={titleRef}
          className="text-3"
          style={{
            position: "absolute",
            fontFamily: "PPRader",
          }}
        >
          NHỮNG GIÁ TRỊ CỦA BẠN
        </span>
        <span
          ref={titleRef}
          className="text-4"
          style={{
            position: "absolute",
            fontFamily: "PPRader",
          }}
        >
          NGAY HÔM NAY
        </span>
        <Image
          ref={imageRef}
          src={Mask}
          alt="contact"
          className="absolute side-image"
        />
        <span className="absolute text-5">
          Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
          nhất!
        </span>
        <div
          ref={formRef}
          className="absolute flex flex-col form-container"
        >
          <input
            type="text"
            placeholder="Họ và tên"
            className="form-item bg-[#191919]"
          />
          <input
            type="text"
            placeholder="Email / SDT"
            className="form-item bg-[#191919]"
          />
          <input
            type="text"
            placeholder="Nhu cầu cần tư vấn"
            className="form-item bg-[#191919] end"
          />
          <ActionButton index={2} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
