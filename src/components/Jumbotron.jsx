import React from "react";
import I14 from "../assets/images/iphone-14.jpg";
const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={I14} alt="iphone 14 pro" />
      <p className="text">Big and Bigger </p>
    </div>
  );
};

export default Jumbotron;
