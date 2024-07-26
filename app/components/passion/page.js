import React, { Fragment, useState } from "react";
import style from "./index.module.scss";
import BreadCumb from "../layout/BreadCumb";
import "./style.css";
import Paragraph from "../layout/word";

const paragraph =
  "DOTS là ngôi nhà của những gã “trẻ mà không non nghề” đam mê thiết kế phát triển website và xây dựng thương hiệu chuyên nghiệp";

const Passion = ({ containerRef }) => {
  const [activeDiv, setActiveDiv] = useState('D');

  const handleClick = (id) => {
    setActiveDiv(id);
  };

  const getDivStyle = (id) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: activeDiv === id ? "#000000" : "rgba(255, 255, 255, 0.30)",
    fontSize: activeDiv === id ? '24px' : '96px',
    zIndex: '2',
    width: "160px",
    height: "160px",
    borderRadius: "100%",
    border: "1px solid rgba(255, 255, 255, 0.40)",
    backgroundColor: activeDiv === id ? "#C8D5BB" : "transparent",
    transition: "all 0.3s ease",
    transform: activeDiv === id ? 'scale(1.2)' : 'scale(1)',
  });

  const getLetterStyle = (id) => ({
    position: 'absolute',
    transition: 'all 0.3s ease',
    left: activeDiv === id ? '20px' : '50%',
    transform: activeDiv === id ? 'translateX(0)' : 'translateX(-50%)',
  });
  
  const getWordStyle = (id) => ({
    position: 'absolute',
    transition: 'all 0.3s ease',
    opacity: activeDiv === id ? 1 : 0,
    left: activeDiv === id ? '36px' : '50%',
    transform: activeDiv === id ? 'translateX(0)' : 'translateX(-50%)',
  });

  return (
    <div
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #16160E 0%, #1D1F18 9.9%, #6C848D 100%)",
      }}
    >
      <div className="flex gap-8 items-start absolute top-[48px] z-[2]">
        <BreadCumb title={"VỀ CHÚNG TÔI"} />
        <Paragraph paragraph={paragraph} />
      </div>
      <div className="h-[120vh] relative">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#999999" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <line x1="360" y1="600" x2="500" y2="432" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="560" y1="460" x2="748" y2="680" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="880" y1="700" x2="1092" y2="600" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="640" y1="380" x2="1092" y2="520" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="400" y1="690" x2="720" y2="740" stroke="url(#lineGradient)" strokeWidth="1"/>
        </svg>
        <div
          id="D" className="absolute"
          style={{
            top: "600px",
            left: "240px",
            ...getDivStyle("D"),
          }}
          onClick={() => handleClick("D")}
        >
          <span style={getLetterStyle("D")}>D</span>
          <span style={getWordStyle("D")}>iscipline</span>
        </div>
        <div
          id="O" className="absolute"
          style={{
            top: "300px",
            left: "480px",
            ...getDivStyle("O"),
          }}
          onClick={() => handleClick("O")}
          >
            <span style={getLetterStyle("O")}>O</span>
            <span style={getWordStyle("O")}>perator</span>
          </div>
        <div
          id="T" className="absolute"
          style={{
            top: "660px",
            left: "720px",
            ...getDivStyle("T"),
          }}
          onClick={() => handleClick("T")}
          >
            <span style={getLetterStyle("T")}>T</span>
            <span style={getWordStyle("T")}>ransaction</span>
          </div>
        <div
          id="S" className="absolute"
          style={{
            top: "480px",
            left: "1080px",
            ...getDivStyle("S"),
          }}
          onClick={() => handleClick("S")}
          >
            <span style={getLetterStyle("S")}>S</span>
            <span style={getWordStyle("S")}>uccessful</span>
          </div>
      </div>
    </div>
  );
};

export default Passion;
