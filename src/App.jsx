import React, { useState, useEffect } from 'react';
import Input from './components/inputBar';
import './App.css';

function App() {
  function getDataByInput(data) {
    if (data !== '') {
      // split data string into array
      let splitedData = data.split(' ');
      let subArrayOfWords = [];
      let resultArray = [];

      for (let i = 0; i < splitedData.length; i++) {
        subArrayOfWords = splitedData.filter((word) => {
          return word === splitedData[i] && word;
        });

        console.log(subArrayOfWords);
      }
    }
  }

  return (
    <div className="App">
      <div>
        <Input getDataByInput={getDataByInput} />
      </div>
    </div>
  );
}

export default App;
