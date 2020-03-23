import React, { useEffect, useState} from 'react';
import axios from "axios";
import PersonsContext from "./components/PersonsContext/personsContext";
import JumboTron from "./components/JumboTron";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [personsState, setPersonsState] = useState([]);
  const [originalPersonsState, setOriginalPersonsState] = useState([]);

  function searchMethod(event) {
    //somefunction to filter
    console.log(event.target.value);
    const searchStr = event.target.value.toLowerCase();
    let tempArr = [];
    originalPersonsState.forEach((item)=> {
      if (item.name.first.toLowerCase().startsWith(searchStr) || item.name.last.toLowerCase().startsWith(searchStr)) {
        tempArr.push(item);
      }
    });
    console.log(tempArr);
    setPersonsState(tempArr);
  }

  function sortMethod() {
    function compare(a, b) {
      const lastnameA = a.name.last.toLowerCase();
      const lastnameB = b.name.last.toLowerCase();
      let comparison = 0;
      if (lastnameA > lastnameB) {
        comparison = 1;
      } else if (lastnameA < lastnameB) {
        comparison = -1;
      }
      return comparison;
    }
    let tempArr = originalPersonsState.sort(compare);
    console.log(tempArr);
    setPersonsState(tempArr);
  }

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
    .then(res => {
      const personsArr = res.data.results;
      setPersonsState(personsArr);
      setOriginalPersonsState(personsArr);
    })
  }, []);

  return (
    <PersonsContext.Provider value={{personsState, searchMethod, sortMethod}}>
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
