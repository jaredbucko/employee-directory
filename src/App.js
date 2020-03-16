import React from 'react';
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import Employees from "./pages/Employees";
import './App.css';

function App() {
  return (
    <div>
      <JumboTron />
        <div className="container">
          <SearchBar />
          <Employees />
        </div>
    </div>
  );
}

export default App;
