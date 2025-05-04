import React from "react";
import "./ShimmerCountryCard.css";

const ShimmerCountryCard = () => {
  const mapped= Array.from({length:50}).map((el,index)=>{
        return <div key={index} className="countries-container">
        <div className="country-card shimmer-card">
          <div className="shimmer-img"></div> {/* Fake image block */}
          <div className="shimmer-text">
            <div className="shimmer-title"></div> {/* Fake title */}
            <div className="shimmer-line"></div> {/* Fake lines */}
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
          </div>
        </div>
      </div>
    })

    
  return (
    <>
    {mapped}
    </>
  );
};

export default ShimmerCountryCard;
