import React, { useEffect, useState} from 'react';
import axios from "axios";
import PersonsContext from "./components/PersonsContext/personsContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import Employees from "./pages/Employees";
import StaticEmployees from "./pages/StaticEmployees";

function App() {
  const [personsState, setPersonsState] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/?results=200&nat=us`)
    .then(res => {
      const personsArr = res.data.results;
      setPersonsState(personsArr);
    })
  })

  return (
    <Router>
      <PersonsContext.Provider value={personsState}>
        <div>
          <JumboTron />
          <SearchBar />
          <Route exact path="/" component={Employees} />
          <Route exact path="/static" component={StaticEmployees} />
        </div>
      </PersonsContext.Provider>
    </Router>
  );
}

export default App;
