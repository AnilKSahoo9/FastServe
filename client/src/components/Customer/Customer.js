import React, { useState } from "react";
import "./Customer.css";
import { images, image } from "../Customer/CustomerData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h3>{images[currImg].title}</h3>
          <text>{images[currImg].subtitle}</text>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
      
      <div className="carousel1">
      <div
        className="carouselInner1"
        style={{ backgroundImage: `url(${image[currImg].img})` }}
      >
        <div
          className="left1"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center1">
          <h3>{image[currImg].title}</h3>
          <text>{image[currImg].subtitle}</text>
        </div>
        <div
          className="right1"
          onClick={() => {
            currImg < image.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default Carousel;
