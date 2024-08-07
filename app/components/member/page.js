"use client";

import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";

const Member = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
      {/* <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section> */}
      <div className="h-[100vh] flex w-100 justify-center items-center">
        <div className="w-[595px] h-[700px] rounded-[20px] bg-[#C8D5BB] relative">
          <img
            src={cards[0].url}
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
            <span className="text-[22px]">{cards[0].title}</span>
            <span className="text-[17px] opacity-40">Business Analyst</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 1 });

  return (
    <div
      ref={cardRef}
      key={card.id}
      style={{
        backgroundColor: "#C8D5BB",
      }}
      className={`group relative rounded-[20px] overflow-hidden flex items-end ${
        isInView
          ? "scale-130 h-[480px] w-[450px]"
          : "opacity-70 h-[450px] w-[450px]"
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-150 ${
          isInView ? "scale-130" : ""
        }`}
      ></div>
      {!isInView && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      {isInView && (
        <>
          <div
            className="absolute inset-0 z-10 flex flex-col gap-2 h-100 w-100 items-start justify-end"
            style={{
              background:
                "linear-gradient(0deg, #0000%, rgba(0, 0, 0, 0.00)100%)",
            }}
          >
            <div className="flex flex-col gap-2 bg-[#000000] w-[450px] p-4 opacity-50">
              <span>{card.title}</span>
              <span>Business Analyst</span>
            </div>
          </div>
        </>
      )}
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
