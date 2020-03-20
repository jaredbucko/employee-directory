import React, { useEffect, useState} from 'react';
import axios from "axios";
import PersonsContext from "./components/PersonsContext/personsContext";
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [personsState, setPersonsState] = useState(
    {
      personsArr: [],
      filterHandler: undefined
    }
  );

  function searchMethod(searchStr) {
    //somefunction to filter
    personsState.personsArr.filter((item)=> {
      return item.name.first.startsWith(searchStr);
    })
  }

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
    .then(res => {
      const personsArr2 = res.data.results;
      setPersonsState({personsArr: personsArr2, filterHandler: searchMethod});
    })
  }, []);

  return (
    <PersonsContext.Provider value={personsState}>
      <div>
        <JumboTron />
        <div className="container">
          <SearchBar />
          <EmployeeTable />
        </div>
      </div>
    </PersonsContext.Provider>
  );
}

export default App;
