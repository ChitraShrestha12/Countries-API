import React from "react";
import './ShimmerCountryDetail.css'

const ShimmerCountryDetail = () => {
  return (
    <main className="shimmer-main">
      <div className="shimmer-container">
        <span className="back-button">
          <div className="shimmer-back"></div> {/* fake back button */}
        </span>

        <div className="shimmer-details">
          <div className="fake-img"></div>

          <div className="details-text-container">
            <div className="shimmer-name"></div> {/* fake title */}
            <div className="details-text">
              <div className="shimmer-native"></div>
              <div className="shimmer-population"></div>
              <div className="shimmer-region"></div>
              <div className="shimmer-sub-region"></div>
              <div className="shimmer-capital"></div>
              <div className="shimmer-top-level-domain"></div>
              <div className="shimmer-currencies"></div> {/* fixed typo */}
              <div className="shimmer-languages"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShimmerCountryDetail;
