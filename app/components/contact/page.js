"use client";
import React, { useEffect, useRef } from "react";
import BreadCumb from "../layout/BreadCumb";
import Image from "next/image";
import ActionButton from "../layout/ActionButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ containerRef }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const section = containerRef.current;

    gsap.fromTo(
      titleRef.current,
      { scale: 0, opacity: 0 },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      formRef.current.children,
      { y: 50, opacity: 0, stagger: 0.2 },
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      <BreadCumb title={"LIÊN HỆ"} />
      <div ref={containerRef} className="relative h-[100vh] p-20">
        <span
          ref={titleRef}
          className="absolute"
          style={{ fontSize: "110px", top: "-48px", textIndent: "200px" }}
        >
          BẮT ĐẦU KIẾN TẠO NHỮNG GIÁ TRỊ CỦA BẠN NGAY HÔM NAY
        </span>
        <Image
          ref={imageRef}
          src={"/images/mask-group.png"}
          width={200}
          height={120}
          alt="contact"
          style={{ position: "absolute", right: "300px", top: "300px" }}
        />
        <span
          className="absolute"
          style={{ fontSize: "16px", top: "500px", maxWidth: "300px" }}
        >
          Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
          nhất!
        </span>
        <div
          ref={formRef}
          className="absolute flex flex-col right-[40%] top-[65%] gap-2"
        >
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-[300px] h-[50px] rounded-lg p-2 bg-[#191919]"
          />
          <input
            type="text"
            placeholder="Email / SDT"
            className="w-[300px] h-[50px] rounded-lg p-2 bg-[#191919]"
          />
          <input
            type="text"
            placeholder="Nhu cầu cần tư vấn"
            className="w-[300px] h-[50px] rounded-lg p-2 bg-[#191919] mb-4"
          />
          <ActionButton width={"300px"} height={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
