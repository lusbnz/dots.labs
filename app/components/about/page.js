import React, { Fragment } from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";

const paragraph =
  "Chúng tôi là creative agency thiết kế website và xây dựng thương hiệu, Chúng tôi giúp doanh nghiệp kết nối với khách hàng bằng câu chuyện của thị giác, ngôn từ và sức mạnh của công nghệ.";

const About = () => {
  return (
    <div>
      <div className="flex gap-8 items-start">
        <BreadCumb title={"GIỚI THIỆU"} />
        <Paragraph paragraph={paragraph} />
      </div>
      <div className={style.wrapper}>
        <video
          src="/videos/about-video.mp4"
          autoPlay
          loop
          muted
          className="h-[1000px]"
        />
      </div>
    </div>
  );
};

export default About;
