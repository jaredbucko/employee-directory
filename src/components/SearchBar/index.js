import React, { useContext } from "react";
import "./style.css";
import PersonsContext from "../PersonsContext/personsContext"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchBar() {
  const { searchMethod } = useContext(PersonsContext);

  return (
    <div className="d-flex justify-content-center">
        <input className="form-control form-control-lg" id="searchBar" type="text" placeholder="Search" onChange={searchMethod}></input>
    </div>
  );
}

export default SearchBar;
