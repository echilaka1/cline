import React from "react";
import Nav from "./nav";
import Body from "./content";

export class DashBoardComponent extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
      </div>
    );
  }
}

export default DashBoardComponent;
