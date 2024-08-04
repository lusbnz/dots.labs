import React from "react";
import Image from "next/image";

const BreadCumb = ({ title }) => {
  return (
    <div className="flex items-center justify-start gap-1 ml-8 mt-4 mb-8" style={{ minWidth: "fit-content" }}>
      <div className="h-2 w-2 bg-white rounded-full"></div>
      <span style={{ fontSize: '18px', opacity: '0.5' }}>
        {title}
      </span>
    </div>
  );
};

export default BreadCumb;
