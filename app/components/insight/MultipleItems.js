import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    style: {
        width: "1000px",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 5
  };
  return (
    <div className="flex items-center w-[1000px]">
      <Slider {...settings}>
        <div className="bg-white text-black w-[200px]">
          <h3>1</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>2</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>3</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>4</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>5</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>6</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>7</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>8</h3>
        </div>
        <div className="bg-white text-black w-[200px]">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
