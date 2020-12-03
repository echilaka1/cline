import React from "react";
import "./style.css";
import { Router } from "react-router-dom";
import history from "./components/services/history";
import Uiroute from './components/routes';

export default function App() {
  return (
    <Router history={history}>
      <Uiroute />
    </Router>
  );
}
