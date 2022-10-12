import React from "react";
import "./Megan.css";

const Megan = () => {
  return (
    <>
      <h1>M</h1>
      <div className="span-container">
        <div key={Math.random()} className="span-blocks"></div>
        <div key={Math.random()} className="span-blocks"></div>
        <div key={Math.random()} className="span-blocks"></div>
      </div>

      <h1>G</h1>
      <h1>A</h1>
      <h1>N</h1>
    </>
  );
};

export default Megan;
