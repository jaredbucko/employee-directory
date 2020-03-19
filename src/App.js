import React, { useEffect, useState} from 'react';
import axios from "axios";
import PersonsContext from "./components/PersonsContext/personsContext";
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [personsState, setPersonsState] = useState([]);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
    .then(res => {
      const personsArr = res.data.results;
      setPersonsState(personsArr);
    })
  }, []);

  return (
    <PersonsContext.Provider value={personsState}>
      <div>
        <JumboTron />
        <SearchBar />
        <EmployeeTable />
      </div>
    </PersonsContext.Provider>
  );
}

export default App;
