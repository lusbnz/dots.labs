import React from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";

const Contact = () => {
  return (
    <>
      <BreadCumb title={"LIÊN HỆ"} />
      <div className={style.wrapper}>Contact</div>
    </>
  );
};

export default Contact;
