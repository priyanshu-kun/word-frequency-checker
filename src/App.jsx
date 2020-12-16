import React, { useState, useEffect } from 'react';
import Input from './components/inputBar';
import Table from './components/table';
import './App.css';

function App() {
  const [resultArray, setResultArray] = useState([]);

  function getDataByInput(data) {
    if (data !== '') {
      // split data string into array
      let splitedData = data.split(' ');
      let subArrayOfWords = [];
      let resultArray = [];

      // logic to count every occurence of word
      for (let i = 0; i < splitedData.length; i++) {
        // It return a subarray of every same word
        subArrayOfWords = splitedData.filter((word) => {
          return word === splitedData[i] && word;
        });

        // At this point this code has a small bug subarrayofword had multiple occurence o same word eg: if we have a array ['enter','a','word','word'] it return subarray like this - ['enter'] ['a'] ['word','word'] ['word','word'] - cause 'word' has 2 occurence to resolve this problem I will append these array into final array
        if (resultArray.length === 0) {
          // if length is 0 mean this is a first element
          resultArray.push({
            element: subArrayOfWords[0],
            size: subArrayOfWords.length,
          });
        } else {
          // check next word is unique or not
          const word = resultArray.find((ele) => {
            return ele.element === subArrayOfWords[0];
          });

          // if this unique find method return undefined then I will push it onto my result array
          if (!word) {
            resultArray.push({
              element: subArrayOfWords[0],
              size: subArrayOfWords.length,
            });
          }
        }

        // console.log(subArrayOfWords);
      }
      setResultArray(resultArray);
    }
  }

  return (
    <div className="App">
      <h1 className="main-heading">Word frequency checker</h1>
      <Input getDataByInput={getDataByInput} />
      <Table resultArray={resultArray} />
    </div>
  );
}

export default App;
