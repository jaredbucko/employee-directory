import React, { useContext } from "react";
import "./style.css";
import PersonsContext from "../PersonsContext/personsContext"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const EmployeeTable = () => {
  const persons = useContext(PersonsContext);
  console.log(persons.length);
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
        { persons.map((person, index) => {
          return (
            <tr key={index}>
              <td className="align-middle"><img src={person.photo} alt="headshot"></img></td>
              <td className="align-middle">{person.name}</td>
              <td className="align-middle">{person.phone}</td>
              <td className="align-middle">{person.email}</td>
              <td className="align-middle">{person.DOB}</td>
            </tr>
            );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
