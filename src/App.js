import logo from './logo.svg';
import './App.css';
import React from 'react'
import GitHubHeader from './components/githubHeader.js'
import GitHubSubtitle from './components/GitHubSubtitle.js'
import Calculator from './components/Calculator.js'

function App() {
  return (
    <div className="App">
      <GitHubHeader />
      <GitHubSubtitle title="Calculator Demo"/>
      <div className="MainContent">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
