/* import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home2 from "./pages/Home";
import About2 from "./pages/About";
import "./App.css";
// import Home fro 

//<nav> == navigation tag

function App() {
  return (
    <div className="App">
    <div>
      <h1>CS 179 Project Page</h1>
      <p>
      Main Goal: 
      What is the most popular streaming services in the US? Among Netflix, Hulu, HBO, Amazon, Disney+.
      Find the most popular streaming services in the US based on the number of tweets using their hashtags by location. 
      </p>
    </div>
      
      <nav>
      <Link to="///">HOME Link</Link> |
      <Link to="///about">ABOUT Link</Link>
      </nav>

        <Routes>
          <Route path="///" element = {<Home2/>} />
          <Route path="///about" element = {<About2/>} />
        </Routes>
       
    </div>
  );
}

export default App;
