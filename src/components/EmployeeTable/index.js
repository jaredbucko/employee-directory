import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function EmployeeTable() {
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
            <tr>
              <td>photo</td>
              <td>Han Solo</td>
              <td>(555)234-5678</td>
              <td>han@falcon.holo</td>
              <td>10-13-1987</td>
            </tr>
            <tr>
              <td>photo</td>
              <td>Han Solo</td>
              <td>(555)234-5678</td>
              <td>han@falcon.holo</td>
              <td>10-13-1987</td>
            </tr>
            <tr>
              <td>photo</td>
              <td>Han Solo</td>
              <td>(555)234-5678</td>
              <td>han@falcon.holo</td>
              <td>10-13-1987</td>
            </tr>
          </tbody>
        </table>
  );
}

export default EmployeeTable;
