import React from "react";
import "./style.css";

function JumboTron() {
  return (
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4">Company Directory</h1>
        <p className="lead">Sort and filter employees below...</p>
      </div>
    </div>
  );
}

export default JumboTron;