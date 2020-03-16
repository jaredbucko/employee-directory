import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import Employees from "./pages/Employees";

function App() {
  return (
    <Router>
      <div>
        <JumboTron />
        <SearchBar />
        <Route exact path="/" component={Employees} /> 
      </div>
    </Router>
  );
}

export default App;
