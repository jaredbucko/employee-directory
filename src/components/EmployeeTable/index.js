import React, { useContext } from "react";
import "./style.css";
import PersonsContext from "../PersonsContext/personsContext"

const EmployeeTable = () => {
  const { personsState, sortMethodFirstName, sortMethodLastName } = useContext(PersonsContext);
  // console.log('rendered');
  // console.log(persons.filterHandler);
  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col"><button type="button" className="btn btn-dark" onClick={sortMethodLastName}>Photo</button></th>
          <th scope="col"><button type="button" className="btn btn-dark" onClick={sortMethodFirstName}>First Name</button></th>
          <th scope="col"><button type="button" className="btn btn-dark" onClick={sortMethodLastName}>Last Name</button></th>
          <th scope="col"><button type="button" className="btn btn-dark" onClick={sortMethodLastName}>Phone</button></th>
          <th scope="col"><button type="button" className="btn btn-dark" onClick={sortMethodLastName}>Email</button></th>
          <th scope="col"><button type="button" className="btn btn-dark" onClick={sortMethodLastName}>DOB</button></th>
        </tr>
      </thead>
      <tbody>
        { personsState.map((person, index) => {
          return (
            <tr key={index}>
              <td className="align-middle"><img src={person.picture.large} alt="headshot"></img></td>
              <td className="align-middle">{person.name.first}</td>
              <td className="align-middle">{person.name.last}</td>
              <td className="align-middle">{person.phone}</td>
              <td className="align-middle">{person.email}</td>
              <td className="align-middle">{person.dob.date}</td>
            </tr>
            );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
