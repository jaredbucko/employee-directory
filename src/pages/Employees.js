import React, { Component } from "react";
// import API from "../utils/API";
import EmployeeTable from "../components/EmployeeTable";

class Employees extends Component {
  // state = {
  //   photo: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  //   DOB: ""
  // };

  // // When the component mounts, load all employees
  // componentDidMount() {
  //   this.loadEmployees();
  // }

  // loadEmployees = () => {
  //   API.getUsers()
  //     .then(res => {
  //         console.log(res);
  //         this.setState({
  //           photo: res.data.results[0].picture.large,
  //           name: res.data.results[0].name.first + " " + res.data.results[0].name.last,
  //           phone: res.data.results[0].phone,
  //           email: res.data.results[0].email,
  //           DOB: res.data.results[0].dob.date
  //         });
  //       } 
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="container">
        <EmployeeTable 
          // photo={this.state.photo}
          // name={this.state.name}
          // phone={this.state.phone}
          // email={this.state.email}
          // DOB={this.state.DOB}
        />
      </div>
    );
  }
}

export default Employees;
