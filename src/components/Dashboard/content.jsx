import React from "react";
import "./index.css";
import khan from "./path8434.png";
import newyork from "./path858.png";
import edtwist from "./g875.png";

export class BodyComponent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 col-s-4">
          <div className="clear-float">
            <span className="text-left">
              <h1 className="h1">All</h1>
            </span>
            <div>
              <span className="text-right">
                <p className="p">34 Results</p>
              </span>
            </div>
          </div>
          <div className="padded">
            <p className="p2">Images</p>
            <p className="p2">Videos</p>
          </div>

          <div className="padded up">
            <h1 className="h12">Sources</h1>
            <p className="p2">
              <img src={edtwist} alt="khan logo" /> edtwist
            </p>
            <p className="p2">
              <i className="fa fa-google"></i>Google
            </p>
            <p className="p2">
              <i className="fa fa-youtube-play"></i>YouTube
            </p>
            <p className="p2">
              <i className="fa fa-wikipedia-w"></i>Wikipedia
            </p>
            <p className="p2">
              <img src={khan} alt="khan logo" /> Khan Academy
            </p>
            <p className="p2">
              <img src={newyork} alt="khan logo" /> New York Public Library
            </p>
          </div>
        </div>
        <div className="col-ran col-s-4">
          <div className="search-bg">
            <div className="row">
              <div className="col-5 col-s-12">
                <h1 class="h1">Search</h1>
                <p className="p2">Your homebase for all your resources</p>
                <a href="#" className="btn-class">Tour</a><a href="#" className="btn-class-two">Got it</a>
              </div>
              <div className="col-7 col-s-12"></div>
            </div>
          </div>
        </div>
        <div className="col-ran col-s-4">
          <div className="search-bg">
            <div className="row">
              <div className="col-5 col-s-12">
                <h1 class="h1">Search</h1>
                <p className="p2">Your homebase for all your resources</p>
              </div>
              <div className="col-7 col-s-12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyComponent;
