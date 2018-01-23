import React from 'react';

const Table = (props) => {
  return (<div className="table">
    <div className="submitted">
      <h4> Submitted </h4>
      <ol>
      {props.submitted.map(pair => 
        <div className="bullet">
          <li>
            <div>{pair[0]}</div>
          </li>
        </div>
      )}
      </ol>
    </div>
    <div className="sorted">
      <h4> Reverse Sorted </h4>
      <ol>
      {props.submitted.map(pair => 
        <div className="bullet">
          <li>
            <div>{pair[1]}</div>
          </li>
        </div>
      )}
      </ol>
    </div>
  </div>)
}

export default Table;
