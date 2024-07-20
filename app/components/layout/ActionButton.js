import React from "react";
import "./style.css"

const ActionButton = () => {
  return (
    <>
      <button
        className={`flex items-center justify-around bg-[#C8D5BB] rounded-[80px] w-[240px] h-[70px] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#C8D5BB]/50 rotateButton`}
      >
        <span className="text-[21px] text-black">Lets task now!</span>
        <div className="h-4 w-4 bg-black rounded-full"></div>
      </button>
    </>
  );
};

export default ActionButton;
