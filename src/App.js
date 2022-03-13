// eslint-disable-next-line
import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./MyComponent/Header.js";
import {Main} from "./MyComponent/Main.js";
import {Checkout} from "./MyComponent/Checkout.js";

function App() {

  return (
  <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/checkout/:id/:name" element={<Checkout/>} />
      </Routes>
  </Router>
  );
}



export default App;
