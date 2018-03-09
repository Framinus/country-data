import React from 'react';

const resultRow = (props) => {
  return (
    <tr>
      <td><img src={props.flag}/></td>
      <td>{props.name}</td>
      <td>{props.languages}</td>
      <td>{props.population}</td>
      <td>{props.landarea}</td>
    </tr>
  )
}

export default resultRow;
