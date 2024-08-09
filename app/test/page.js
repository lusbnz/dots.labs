"use client";

import Slider from "react-slick";
import { useRef } from "react";

import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CenterMode() {
  const slickRef = useRef(null);
  const slides = ["1", "2", "3", "4", "5", "6"];

  const cards = [
    {
      url: "/images/abc.svg",
      title: "Quan Nguyen",
      id: 1,
    },
    {
      url: "/images/abc.svg",
      title: "Quan Nguyen",
      id: 2,
    },
    {
      url: "/images/abc.svg",
      title: "Quan Nguyen",
      id: 3,
    },
    {
      url: "/images/abc.svg",
      title: "Quan Nguyen",
      id: 4,
    },
    {
      url: "/images/abc.svg",
      title: "Quan Nguyen",
      id: 5,
    },
    {
      url: "/images/abc.svg",
      title: "Quan Nguyen",
      id: 6,
    },
  ];

  return (
    <div className="h-[100vh] mt-[200px]">
      <Slider
        centerMode={true}
        focusOnSelect={true}
        infinite={true}
        ref={slickRef}
        slidesToShow={3}
        autoplay={true}
        arrows={false}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[595px] h-[700px] rounded-[20px] relative mx-[24px]"
          >
            <div className="w-[595px] h-[700px] rounded-[20px] relative bg-[#C8D5BB] hover:opacity-80  hover:scale-105 transition-all duration-300">
              <img
                src={card.url}
                alt="card"
                style={{ width: "595px", height: "800px", top: "-60px" }}
                className="absolute"
              />
              <div
                className="w-[595px] h-[360px] absolute bottom-0 flex flex-col justify-end p-[28px]"
                style={{
                  zIndex: "2",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <span className="text-[22px]">{card.title}</span>
                <span className="text-[17px] opacity-40">Business Analyst</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
