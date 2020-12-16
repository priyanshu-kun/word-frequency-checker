import React, { useState } from 'react';
import '../styles/table.css';

export default function Table(props) {
  const { resultArray } = props;
  //   console.log(data, index);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>
              <h1>Word</h1>
            </th>
            <th>
              <h1>Frequency</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {resultArray.length !== 0 &&
            resultArray.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.element}</td>
                  <td>{data.size}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
