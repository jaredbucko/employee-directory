import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function EmployeeRow(props) {
  return (
    <tr>
        <td class="align-middle"><img src={props.photo} alt="headshot"></img></td>
        <td class="align-middle">{props.name}</td>
        <td class="align-middle">{props.phone}</td>
        <td class="align-middle">{props.email}</td>
        <td class="align-middle">{props.DOB}</td>
    </tr>
  );
}

export default EmployeeRow;
