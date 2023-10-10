import React from "react";
import Weather from './Weather.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className ="container">
        <Weather defaultCity="London" />
    <footer>
      This Project was coded by Nobuhle and is open sourced and hosted on netlify
    </footer>
    </div>
    </div>
  );
}

export default App;
