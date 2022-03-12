import React, { useState } from 'react';
import Card from "./Card.js";
import Data from './shoesData.json';
import thank from './thank.js';

const getFilteredItems = (query,items) =>{
  if(!query){
    return items;
  }
  return items.filter((shoe) => shoe.name.includes(query));
};

export const Main=()=>{
  
  const [query,setQuery]=useState("");
  const {tracks} = thank;
  const {items} = tracks;
  const filteredItems = getFilteredItems(query,items);
  
  return(
    <div>
      <div className="header shadow heady">
        <h1 className="text-center" >Shoe Company Name</h1>
        <p className="text-center">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <form className="d-flex">
          <input className="form-control me-2 searchme" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)}></input>
          <button className="btn btn-warning" type="submit" >Search</button>
        </form>
      </div>

      <div className="album py-5 bg-light" id="albumm">
        <div className="container">
          <div className="row second">
            <div className="col-8"><h2 id="totalproduct">12 Products</h2></div>
            
            <div className="container">
              <div className="row list" id="repeat">
                {filteredItems.map((shoe) => (
                  <Card
                    id={shoe.id}
                    name={shoe.name}
                    price={shoe.price}
                    star={shoe.star}
                    time={shoe.time}
                    image={shoe.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
