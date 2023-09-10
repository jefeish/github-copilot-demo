import logo from './logo.svg';
import './App.css';
import React from 'react'
import '@primer/css/dist/primer.css';
import Calculator from './components/Calculator.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1>My App</h1>
      </header>
      <div className="MainContent">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
