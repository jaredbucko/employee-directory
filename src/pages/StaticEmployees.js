import React, { Component } from "react";
// import API from "../utils/API";
//import EmployeeTable from "../components/EmployeeTable";
import staticData from "../db/static_data.json"
import TableBody from "../components/TableBody"


class StaticEmployees extends Component {
    state = {
        persons: [],
        changePersonHandler: (searchString) => {
            this.persons.filter(function(currentVal, idx) {
            return currentVal.first.name.startsWith(searchString);
            })
        }
    };

  // When the component mounts, load all employees
  componentDidMount() {
    this.setState({ persons: staticData.results});
  }

  render() {
    return (
      <div className="container">
        <TableBody 
        content={this.state.persons} changePersonHandler={this.state.changePersonHandler}
        />
      </div>
    );
  }
}

export default StaticEmployees;
