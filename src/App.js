import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import Employees from "./pages/Employees";
import StaticEmployees from "./pages/StaticEmployees";

function App() {
  return (
    <Router>
      <div>
        <JumboTron />
        <SearchBar />
        <Route exact path="/" component={Employees} />
        <Route exact path="/static" component={StaticEmployees} />
      </div>
    </Router>
  );
}

export default App;
