import React from "react";
import wireframe from "./images/eddddd.PNG";
import "./tourcard.css";

function TourCard() {
  return (
    <>
      <div className="search-bg">
        <div className="row">
          <div className="col-6 col-s-12">
            <h1 className="h1">Search</h1>
            <p className="p2">Your homebase for all your resources</p>
            <a href="#" className="btn-class">
              Tour
            </a>
            <a href="#" className="btn-class-two">
              Got it
            </a>
          </div>
          <div className="col-6 col-s-12">
            <img src={wireframe} alt="UI wireframe" />
          </div>
        </div>
      </div>
    </>
  );
}
export default TourCard;
