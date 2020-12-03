import React from "react";
import "./index.css";
import khancolor from "./path843.png";
import newyorkco from "./image834.png";
import wireframe from "./eddddd.PNG";
import Card from "./card";
import Sidebar from "./sidebar";

export class BodyComponent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 col-s-4">
          <Sidebar />
        </div>
        <div className="col-ran col-s-4">
          <div className="search-bg">
            <div className="row">
              <div className="col-6 col-s-12">
                <h1 class="h1">Search</h1>
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
          <Card
            Logo={newyorkco}
            Title="New York Public Library"
            subTitle="a Silicon Valley Adventure"
          />
        </div>
        <div className="col-ran col-s-4">
          <Card
            Logo={khancolor}
            Title="Khan Academy"
            subTitle="Late night ideas"
          />
        </div>
      </div>
    );
  }
}

export default BodyComponent;
