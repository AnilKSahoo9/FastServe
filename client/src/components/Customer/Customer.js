import React, { useEffect, useState } from "react";
import "./Customer.css";
import { images, image, image1, imag } from "../Customer/CustomerData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from 'axios';
function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const [data,setData] = useState([]);
const fetchData = () => {
  axios.get(`http://localhost:4000/getkitchendata/`).then(responseData => {
    setData(responseData.data);
  })
}

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="carousel" id="div1">
      {data.map((z,index) => (
        <div
        className="carouselInner"
        style={{backgroundImage: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)' }}
      >
        {z.tableNo? (<div className="center">
          <h5 className="title">Table : {z.tableNo}</h5>
          <text className="subtitle">{z.orderStatus}</text>
        </div>) : (<div className="center">
          <h5 className="title">parcel</h5>
          <text className="subtitle">{z.orderStatus}</text>
        </div>)}
        
      
      </div>
      ))}
      {/* <div
        className="carouselInner"
        style={{backgroundImage: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)' }}
      >
        
        <div className="center">
          <h5 className="title">{images[currImg].title}</h5>
          <text className="subtitle">{images[currImg].subtitle}</text>
        </div>
        
      </div> */}
      
      {/* <div className="carousel1" id="div2">
      <div
        className="carouselInner1"
        style={{backgroundImage: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)' }}
      >
        
        <div className="center1">
          <h5 className="title">{image[currImg].title}</h5>
          <text className="subtitle">{image[currImg].subtitle}</text>
        </div>
        
        </div>
      </div>
      <div className="carousel2" id="div3">
      <div
        className="carouselInner2"
        style={{ backgroundImage: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)' }}
      >
        
        <div className="center2">
          <h5 className="title">{image1[currImg].title}</h5>
          <text className="subtitle">{image1[currImg].subtitle}</text>
        </div>
        
        </div>
      </div>
      <div className="carousel2"id="div4">
      <div
        className="carouselInner2"
        style={{ backgroundImage: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)' }}
      >
        
        <div className="center2">
          <h5 className="title">{imag[currImg].title}</h5>
          <text className="subtitle">{imag[currImg].subtitle}</text>
        </div>
        
        </div>
      </div> */}
    </div>
    
  );
}

export default Carousel;
