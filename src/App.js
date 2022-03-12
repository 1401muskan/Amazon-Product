// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header.js";
import {Main} from "./MyComponent/Main.js";
import {Checkout} from "./MyComponent/Checkout.js";
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  return (
  <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/checkout/:id" element={<Checkout/>} />
      </Routes>
  </Router>
  );
}



export default App;
