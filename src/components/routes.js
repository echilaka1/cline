import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Login";
import DashBoardComponent from "./Dashboard";

export default function Uiroute() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exactpath="/Dashboard" component={DashBoardComponent} />
    </Switch>
  );
}
