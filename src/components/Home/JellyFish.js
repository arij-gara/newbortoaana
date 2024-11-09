import React, { useState } from "react";
import Form from "../Inputs/Form"; // Adjust the path as necessary
import JellyFishImage from "../../assests/images/c.png"
import Cross from "../../assests/images/cross.png"
const JellyFish= ({isZoomed,setIsZoomed}) => {


  return (
   
    <div
      className={`flex justify-center items-center   h-screen bg-black overflow-hidden transition-transform duration-700 ${
        isZoomed ? "scale-150" : "scale-100"
      }`}
      style={{
        transformOrigin: "center center",
      }}
    >
        
      
      {/* Rectangle for zoom effect */}
      <div
        onClick={() => setIsZoomed(!isZoomed)}
        className={`transition-all rounded-xl duration-700 ${
          isZoomed ? "w-2/4 h-2/4 fixed " : "w-28 h-24 fixed"
        } flex items-center justify-center`}
        style={{
           
          top: isZoomed ? "13%" : "70px",
          left: isZoomed ? "13%" : "650px",
          borderWidth: "10px",
          borderStyle: "solid",
          borderImage: isZoomed
            ? "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1"
            : " 1",
            pointerEvents: isZoomed ? "auto" : "auto",
           
        }}
      >
        {isZoomed && <Form onClose={() => setIsZoomed(false)} />}
      </div>
      {/* Jellyfish image with zoom and translate effect */}
      <div
        className={`absolute  flex justify-center items-center transition-transform duration-700 ${
          isZoomed ? "scale-150 translate-x-[19vw] translate-y-[37vh] " : "scale-100 fixed"
        }`}
        style={{
          top: isZoomed ? "bottom right" : "80px",
          left:isZoomed ? "bottom right" : '660px'
        }}
      >
        <img
          src={JellyFishImage}
          alt="Jellyfish"
          className={`  transition-opacity duration-700 
              ${
            isZoomed ? "opacity-100" : "opacity-100"
          }`}
        />

        {/* Button positioned at the top-left of the jellyfish */}
        <button
          className="absolute top-16 left-10 w-12 h-12 z-30"
          onClick={() => setIsZoomed(true)}
          style={{ backgroundColor: "", border: "none" }}
          aria-label="Jellyfish head"
        />
      </div>
     
    </div>
  );
};

export default JellyFish;