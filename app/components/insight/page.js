"use client";

import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";
import Card from "./Card";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import MultipleItems from "./MultipleItems";
import Slider from "react-slick";

const images = [
  {
    url: "https://picsum.photos/600/400",
    title: "image 1",
  },
  {
    url: "https://picsum.photos/600/400",
    title: "image 2",
  },
  {
    url: "https://picsum.photos/600/400",
    title: "image 3",
  },
];

const Insight = () => {
  const FAST_DURATION = 75;
  const SLOW_DURATION = 25;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <BreadCumb title={"Insight"} />
      <div className={style.wrapper}>
        <div
          className="flex gap-4 w-full justify-around"
          // ref={ref}
          // style={{ x: xTranslation }}
          // onHoverStart={() => {
          //   setMustFinish(true);
          //   setDuration(SLOW_DURATION);
          // }}
          // onHoverEnd={() => {
          //   setMustFinish(true);
          //   setDuration(FAST_DURATION);
          // }}
        >
          {[...images].map((item, index) => (
            <div key={index} className="flex flex-col">
              <Card image={item.url} key={index} />
              <div className="mt-[24px]">
                <div className="flex items-center gap-2 mb-[16px]">
                  <span className="text-[17px]">SEP 23, 2023</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-[#FFFFFF]"></span>
                  <span className="text-[17px] opacity-50">BRANDING</span>
                </div>
      
                <span>Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm nhất!</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Insight;
