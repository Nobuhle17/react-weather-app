import React from "react";
import Weather from './Weather.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className ="container">
        <Weather defaultCity="London" />
         <footer>
          This project was coded by{" "}
            Nobuhle Mahlangu
          and is{" "}
          <a
            href="https://github.com/Nobuhle17/react-weather-app"
            target="_blank"
            
          >
            open-sourced on GitHub
            href=
          </a>{" "}
          and{" "}
          < a href="https://incomparable-platypus-4cc204.netlify.app"
            target="_blank"
            
          >
            hosted on Netlify
          </a>
        </footer>
   
    </div>
    </div>
  );
}

export default App;
