import React, { useState, useEffect } from 'react';
import seed from '../seed';
import '../styles/inputBar.css';

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
        <textarea
          type="text"
          placeholder="Your String"
          onChange={handleChange}
          value={state}
        ></textarea>
        <div className="buttons">
          <button type="button" onClick={LoadSampleData}>
            Sample Data
          </button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
