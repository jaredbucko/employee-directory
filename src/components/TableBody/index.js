import React from "react";

const TableBody = (props) => { 
    console.log(props.content.length + " People");
    
    return (
      <tbody>
      { props.content.map((person, index) => { 
        return (
          <tr key={index}>
            <td>{person.name.first}</td>
            <td>{person.name.last}</td>
            <td>{person.gender}</td>
           </tr>
          );
      })}
   </tbody> 
    ) 
  };

export default TableBody;
