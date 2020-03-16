import React from "react";
import EmployeeRow from "../EmployeeRow";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function EmployeeTable(props) {
  return (
    <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeRow 
              photo={props.photo}
              name={props.name}
              phone={props.phone}
              email={props.email}
              DOB={props.DOB}
            />
          </tbody>
        </table>
  );
}

export default EmployeeTable;
