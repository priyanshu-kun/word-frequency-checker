import React, { useState, useEffect } from 'react';
import seed from '../seed';

export default function Input(props) {
  const [state, setState] = useState('');
  const [result, setResult] = useState('');
  function handleChange(e) {
    setState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setResult(state);
  }

  function LoadSampleData() {
    let array_ele = seed[Math.floor(Math.random() * seed.length)];
    setResult(array_ele);
    setState(array_ele);
  }

  useEffect(() => {
    props.getDataByInput(result);
  }, [result]);

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Word Here"
          onChange={handleChange}
          value={state}
        />
        <div>
          <button type="button" onClick={LoadSampleData}>
            Sample Data
          </button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
