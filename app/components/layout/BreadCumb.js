import React from "react";
import Image from "next/image";
import './style.css';

const BreadCumb = ({ title, unique }) => {
  return (
    <div className="flex items-center justify-start gap-1 ml-[42px] mb-[42px]" style={{ minWidth: "fit-content", marginTop: unique ? "48px" : "8px" }}>
      <div className="h-2 w-2 bg-white rounded-full"></div>
      <span className="breadcrumb-text" style={{ opacity: '0.5' }}>
        {title}
      </span>
    </div>
  );
};

export default BreadCumb;
