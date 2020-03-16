import React, { Component } from "react";
import EmployeeTable from "../components/EmployeeTable"
import API from "../utils/API";

class Employees extends Component {
  state = {
    email: ""
  };

  // When the component mounts, load all employees
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getUsers()
      .then(res => {
          console.log(res);
          this.setState({
            email: res.data.results[0].email
          });
        } 
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <EmployeeTable />
        <h1>Email: {this.state.email}</h1>
      </div>
    );
  }
}

export default Employees;
