import React from 'react';

function Checkout(props) {
  return(
    <div className="container-fluid">
      <div class="row">
        <div class="col">
          <img src={props.image} alt=""></img>
        </div>
        <div class="col">
          <h2 class="row">{props.name}</h2>
          <p class="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3 class="row">{props.price}</h3>
          <h5 class="row">{props.time}</h5>
          <h4 class="row">Qty</h4>
          <div class="row">
            <button class="col" type="button" name="button">-</button>
            <input class="col"type="text" name="add" value="">
            <button class="col" type="button" name="button">+</button>
          </div>
          <button class="row" type="submit" name="button">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Checkout;
