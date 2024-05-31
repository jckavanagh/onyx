import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Body.css";
import Login from "./Login";

const Body = (props) => {
  const { isOpen, toggle } = props;
  return <Login isOpen={isOpen} toggle={toggle} />;
};

export default Body;
