import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator.js'
import React from 'react'

function App() {
  return (
    <div className="App">
      <div className="MainContent">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
