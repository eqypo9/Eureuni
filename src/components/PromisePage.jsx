import React, { useState } from "react";
import UserBar from "../FriendBar/friend";
import Sidebar from "./Navigation/sidebar";

function PromisePage() {
  const [selectedImage, setSelectedImage] = useState("./public/image/blue.jpg");

  // 각 원을 클릭할 때 실행될 함수
  const handleCircleClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    
    <div className="promise">
      <div className="promisepage__nav">
        <Sidebar />
      </div>
      <div className="promisepage__fri">
        <UserBar />
      </div>
      <div className="promisepage__image-container">
        <img
          src={selectedImage}
          alt="디폴트 색상은 회색"
          className="promisepage__image"
        />
      </div>
      <div className="promisepage__circles">
        <div
          className="promisepage__circle"
          style={{ backgroundColor: "blue" }}
          onClick={() => handleCircleClick("/img/blue.jpg")}
        ></div>
        <div
          className="promisepage__circle"
          style={{ backgroundColor: "brown" }}
          onClick={() => handleCircleClick("/img/brown.jpg")}
        ></div>
        <div
          className="promisepage__circle"
          style={{ backgroundColor: "green" }}
          onClick={() => handleCircleClick("/img/green.jpg")}
        ></div>
        <div
          className="promisepage__circle"
          style={{ backgroundColor: "pink" }}
          onClick={() => handleCircleClick("/img/pink.jpg")}
        ></div>
        <div
          className="promisepage__circle"
          style={{ backgroundColor: "purple" }}
          onClick={() => handleCircleClick("/img/purple.jpg")}
        ></div>
        </div>
    </div>
  );
}

export default PromisePage;