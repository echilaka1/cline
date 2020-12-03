import React from "react";
import "./index.css";
import khancolor from "./images/path843.png";
import newyorkco from "./images/image834.png";
import Card from "./card";
import Tourcard from "./tourcard";
import Sidebar from "./sidebar";
import david from "./images/david.PNG";
import youtube from "./images/youtube.png";

export class BodyComponent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 col-s-4">
          <Sidebar />
        </div>
        <div className="col-ran col-s-4">
          <Tourcard />
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
          <Card
            Logo={youtube}
            Title="YouTube"
            subTitle="A Better Time"
            media={david}
          />
        </div>
      </div>
    );
  }
}

export default BodyComponent;
