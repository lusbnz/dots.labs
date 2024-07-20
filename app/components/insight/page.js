"use client";

import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";
import Card from "./Card";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

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
  {
    url: "https://picsum.photos/600/400",
    title: "image 4",
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

  return (
    <>
      <BreadCumb title={"Insight"} />
      <div className={style.wrapper}>
        <motion.div
          className="absolute left-0 flex gap-4 w-full"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images].map((item, index) => (
            <Card image={item.url} key={index} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Insight;
