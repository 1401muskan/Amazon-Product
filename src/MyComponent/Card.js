import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return(
    <div>
        <div class="col-md-4">
           <div class="card mb-4 shadow-sm" >
             <img id="shoeimg" src={props.image} class="card-img-top" width="240px" height="150px"></img>
             <div class="card-body">
                 <div class="justify-content-between align-items-center">
                   <hr></hr>
                   <div class="row">
                     <div class="col"><h5 id="shoename" class="card-img-header">{props.name}</h5><br></br></div>
                     <div class="col"><h6 id="shoestar">★{props.star}.0</h6></div>
                   </div>
                   <div class="row">
                     <div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹{props.price}.00</h5><br></br></div>
                   </div>
                   <div class="row">
                     <div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: {props.time}</h6></div>
                   </div>
                 </div>
             </div>
           </div>
        </div>
    </div>
  )
}
export default Card;
