import React from "react";
import "./style.css"

const ActionButton = ({index}) => {
  return (
    <>
      <button
        className={`action-button${index} flex items-center justify-between gap-2 bg-[#C8D5BB] rounded-[80px] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#C8D5BB]/50 rotateButton`}
      >
        <span className="text-black">Lets task now!</span>
        <div className="dots bg-black rounded-full"></div>
      </button>
    </>
  );
};

export default ActionButton;
