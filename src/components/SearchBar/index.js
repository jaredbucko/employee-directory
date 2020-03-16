import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchBar() {
  return (
    <div className="d-flex justify-content-center">
        <input className="form-control form-control-lg" id="searchBar" type="text" placeholder="Search"></input>
    </div>
  );
}

export default SearchBar;
