"use client";

import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef, useState } from "react";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Member = () => {
  const slickRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div style={{ padding: "48px 0" }}>
      <div className="flex gap-4 items-start justify-between">
        <BreadCumb title={"ĐỘI NGŨ CỦA DOTS"} />
        <Paragraph
          paragraph={
            "Tại DOTS, đội ngũ nhân sự của chúng tôi là tài sản quý giá nhất. Mỗi thành viên đều mang trong mình niềm đam mê, sự sáng tạo và chuyên môn cao trong lĩnh vực."
          }
        />
      </div>
      <div className="h-[100vh] mt-[100px]">
        <Slider
          centerMode={true}
          focusOnSelect={true}
          infinite={true}
          ref={slickRef}
          slidesToShow={3}
          autoplay={true}
          arrows={false}
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
          speed={300}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={` ${
                currentSlide === index ? "h-[800px] " : "h-[600px] "
              } w-[425px] flex items-end justify-center rounded-[20px] relative mx-[64px] transition-all duration-300`}
              style={{ display: "flex !important" }}
            >
              <div
                className={` ${
                  currentSlide === index ? "h-[600px] " : "h-[400px] "
                } w-[425px] flex items-end justify-center rounded-[20px] relative bg-[#C8D5BB] hover:opacity-80  hover:scale-105 transition-all duration-300`}
                style={{ display: "flex !important" }}
              >
                <img
                  src={card.url}
                  alt="card"
                  style={{
                    width: currentSlide === index ? "425px" : "425px",
                    height: currentSlide === index ? "800px" : "600px",
                    top: "-60px",
                  }}
                  className="absolute"
                />
                {currentSlide === index && (
                  <div
                    className={`${
                      currentSlide === index ? "h-[800px] " : "h-[600px]"
                    } w-[425px] absolute bottom-0 flex flex-col justify-end p-[28px]`}
                    style={{
                      zIndex: 110,
                      background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  >
                    <span className="text-[22px]">{card.title}</span>
                    <span className="text-[17px] opacity-40">
                      Business Analyst
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Member;

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
