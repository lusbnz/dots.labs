import React from "react";
import Image from "next/image";

const BreadCumb = ({ title, unique }) => {
  return (
    <div className="flex items-center justify-start gap-1 ml-[42px] mb-[42px]" style={{ minWidth: "fit-content", marginTop: unique ? "48px" : "0px" }}>
      <div className="h-2 w-2 bg-white rounded-full"></div>
      <span style={{ fontSize: '18px', opacity: '0.5' }}>
        {title}
      </span>
    </div>
  );
};

export default BreadCumb;
