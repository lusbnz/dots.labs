import React from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";

const Feedback = () => {
  return (
    <>
      <BreadCumb title={'KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI'}/>
      <div className={style.wrapper}>Feedback</div>
    </>
  );
};

export default Feedback;
