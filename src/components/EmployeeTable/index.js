import React, { useContext } from "react";
import "./style.css";
import PersonsContext from "../PersonsContext/personsContext"

const EmployeeTable = () => {
  const persons = useContext(PersonsContext);
  console.log(persons);
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          { persons.map((person, index) => {
            return (
              <tr key={index}>
                <td className="align-middle"><img src={person.picture.large} alt="headshot"></img></td>
                <td className="align-middle">{person.name.last}</td>
                <td className="align-middle">{person.name.first}</td>
                <td className="align-middle">{person.phone}</td>
                <td className="align-middle">{person.email}</td>
                <td className="align-middle">{person.dob.date}</td>
              </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
