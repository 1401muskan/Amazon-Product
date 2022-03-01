// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header.js";
import {Main} from "./MyComponent/Main.js";
import React,{useState} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
  <Router>
    <Header/>
    <Main/>
  </Router>
  );
}

export default App;
