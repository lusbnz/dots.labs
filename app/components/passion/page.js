import React, { Fragment } from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";
import "./style.css";
import Paragraph from "../layout/word";

const paragraph =
  "DOTS là ngôi nhà của những gã “trẻ mà không non nghề” đam mê thiết kế phát triển website và xây dựng thương hiệu chuyên nghiệp";

const Passion = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "48px 0",
        background:
          "linear-gradient(180deg, #16160E 0%, #1D1F18 9.9%, #6C848D 100%)",
      }}
    >
      <div className="flex gap-8 items-start">
        <BreadCumb title={"VỀ CHÚNG TÔI"} />
        <Paragraph paragraph={paragraph} />
      </div>
      <div className={style.wrapper}>Passion</div>
    </div>
  );
};

export default Passion;