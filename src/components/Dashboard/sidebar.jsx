import React from "react";
import khan from "./images/path8434.png";
import newyork from "./images/path858.png";
import edtwist from "./images/g875.png";

function SideBar() {
  return (
    <>
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
    </>
  );
}
export default SideBar;
