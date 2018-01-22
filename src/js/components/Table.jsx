import React from 'react';

const Table = (props) => {
  return (<div>
    <h4> Submitted, Sorted </h4>
    <ol>
    {props.submitted.map(pair => 
      <div>
        <li>
          <div className="submitted">{pair[0]}</div>
          <div className="sorted">{pair[1]}</div>
        </li>
      </div>
    )}
    </ol>
  </div>)
}

export default Table;
