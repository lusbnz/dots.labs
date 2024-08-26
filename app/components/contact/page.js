"use client";
import React, { useEffect, useRef } from "react";
import BreadCumb from "../layout/BreadCumb";
import Image from "next/image";
import ActionButton from "../layout/ActionButton";
import gsap from "gsap";
import B from "@/public/icons/B.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ containerRef }) => {
  const charRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);

  // useEffect(() => {
  //   const section = containerRef.current;

  //   gsap.fromTo(
  //     charRef.current,
  //     { scale: 0, opacity: 0 },
  //     {
  //       duration: 1,
  //       scale: 1,
  //       opacity: 1,
  //       ease: "expo.inOut",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top center",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     titleRef.current,
  //     { scale: 0, opacity: 0 },
  //     {
  //       duration: 1,
  //       scale: 1,
  //       opacity: 1,
  //       ease: "expo.inOut",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top center",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     imageRef.current,
  //     { x: 100, opacity: 0 },
  //     {
  //       duration: 1,
  //       x: 0,
  //       opacity: 1,
  //       ease: "expo.inOut",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top center",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     formRef.current.children,
  //     { y: 50, opacity: 0, stagger: 0.2 },
  //     {
  //       duration: 0.8,
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.2,
  //       ease: "expo.inOut",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top center",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div>
      <BreadCumb title={"LIÊN HỆ"} />
      <div ref={containerRef} className="relative h-[100vh] p-20">
        <Image
          ref={charRef}
          src={B}
          alt="B"
          style={{
            width: "360px",
            height: "300px",
            position: "absolute",
            top: "-160px",
            left: "120px",
          }}
        />
        <span
          ref={titleRef}
          className="absolute"
          style={{
            fontSize: "170px",
            top: "-48px",
            textIndent: "360px",
            fontFamily: "PPRader",
          }}
        >
          ẮT ĐẦU KIẾN TẠO
        </span>
        <span
          ref={titleRef}
          className="absolute"
          style={{
            fontSize: "170px",
            top: "160px",
            left: "50px",
            // textIndent: "360px",
            fontFamily: "PPRader",
          }}
        >
          NHỮNG GIÁ TRỊ CỦA BẠN
        </span>
        <span
          ref={titleRef}
          className="absolute"
          style={{
            fontSize: "170px",
            top: "360px",
            textIndent: "580px",
            fontFamily: "PPRader",
          }}
        >
          NGAY HÔM NAY
        </span>
        <Image
          ref={imageRef}
          src={"/images/mask-group.png"}
          width={200}
          height={136}
          alt="contact"
          style={{ position: "absolute", left: "60px", top: "420px" }}
        />
        <span
          className="absolute"
          style={{ fontSize: "16px", top: "600px", maxWidth: "300px" }}
        >
          Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
          nhất!
        </span>
        <div
          ref={formRef}
          className="absolute flex flex-col right-[34%] top-[60%] gap-2"
        >
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-[600px] h-[80px] pl-[28px] rounded-[12px] bg-[#191919]"
          />
          <input
            type="text"
            placeholder="Email / SDT"
            className="w-[600px] h-[80px] pl-[28px] rounded-[12px] bg-[#191919]"
          />
          <input
            type="text"
            placeholder="Nhu cầu cần tư vấn"
            className="w-[600px] h-[80px] pl-[28px] rounded-[12px] bg-[#191919] mb-4"
          />
          <ActionButton index={2} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
