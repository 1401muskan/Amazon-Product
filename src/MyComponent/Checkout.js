import React from 'react';
import { useParams } from "react-router-dom";
import Data from './MOCK_DATA.json';

export const Checkout=(props)=> {
  
  let { id } = useParams();

  return(
    
      <div classNameName="container">
        <div className="row">
          <div className="col">
            <img src={Data[id-1].image} alt=""></img>
          </div><br></br>
          <div className="col">
            <h2 className="row">{Data[id-1].name}</h2>
            <p className="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br></br>
            <h3 className="row">{Data[id-1].price}</h3><br></br>
            <h5 className="row">{Data[id-1].time}</h5>
            <h5 className="row">{Data[id-1].star}</h5><br></br>
            <h4 className="row">Qty</h4><br></br>
            <div className="row">
              <button className="col" type="button" name="button">-</button>
              <input className="col"type="text" name="add" value=""></input>
              <button className="col" type="button" name="button">+</button>
            </div>
            <button className="row" type="submit" name="button">Add to Cart</button>
          </div>
        </div>
      </div>
  )
}
