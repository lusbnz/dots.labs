"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";

const Member = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div style={{ padding: "48px 0" }}>
      <div className="flex gap-4 items-start">
        <BreadCumb title={"ĐỘI NGŨ CỦA DOTS"} />
        <Paragraph
          paragraph={
            "Tại DOTS, đội ngũ nhân sự của chúng tôi là tài sản quý giá nhất. Mỗi thành viên đều mang trong mình niềm đam mê, sự sáng tạo và chuyên môn cao trong lĩnh vực."
          }
        />
      </div>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-[36px] font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Member;

const cards = [
  {
    url: "/images/member.png",
    title: "Quan Nguyen",
    id: 1,
  },
  {
    url: "/images/member.png",
    title: "Quan Nguyen",
    id: 2,
  },
  {
    url: "/images/member.png",
    title: "Quan Nguyen",
    id: 3,
  },
  {
    url: "/images/member.png",
    title: "Quan Nguyen",
    id: 4,
  },
  {
    url: "/images/member.png",
    title: "Quan Nguyen",
    id: 5,
  },
  {
    url: "/images/member.png",
    title: "Quan Nguyen",
    id: 6,
  },
];
