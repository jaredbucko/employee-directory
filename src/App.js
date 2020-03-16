import React from 'react';
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import './App.css';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div>
      <JumboTron />
        <div className="container">
          <SearchBar />
          <EmployeeTable />
        </div>
    </div>
  );
}

export default App;
