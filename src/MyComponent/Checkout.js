import React from 'react';

export const Checkout=(props)=> {
  // const { state } = useLocation();
  return(
    <div classNameName="container-fluid">
      <div className="row">
        <div className="col">
          <img src={props.image} alt=""></img>
        </div>
        <div className="col">
          <h2 className="row">{props.name}</h2>
          <p className="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3 className="row">{props.price}</h3>
          <h5 className="row">{props.time}</h5>
          <h4 className="row">Qty</h4>
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
