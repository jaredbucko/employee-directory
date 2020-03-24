import React from "react";
import "./style.css";

function JumboTron() {
  return (
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4">Company Directory</h1>
        <p className="lead">Search by first or last name and/or click a column heading to sort by Last Name/First Name</p>
      </div>
    </div>
  );
}

export default JumboTron;