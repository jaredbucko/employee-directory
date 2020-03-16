import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function EmployeeRow(props) {
  return (
    <tr>
        <td>photo</td>
        <td>Han Solo</td>
        <td>(555)234-5678</td>
        <td>han@falcon.holo</td>
        <td>10-13-1987</td>
    </tr>
  );
}

export default EmployeeRow;
