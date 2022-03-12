import React, { useState } from 'react';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Card from "./Card.js";

export const Main=()=>{

  const shoes =[
    {
      id: 1,
      image: "/images/1.png",
      name: "Shoe Name 01",
      price: 1000,
      star: 4.0,
      time: "29 Tuesday"
    },
    {
      id: 2,
      image: "/images/2.png",
      name: "Shoe Name 02",
      price: 1060,
      star: 5.0,
      time: "27 Sunday"
    },
    {
      id: 3,
      image: "/images/3.png",
      name: "Shoe Name 03",
      price: 2000,
      star: 3.0,
      time: "28 Monday"
    },
    {
      id: 4,
      image: "/images/1.png",
      name: "Shoe Name 04",
      price: 4500,
      star: 5.0,
      time: "25 Friday"
    },
    {
      id: 5,
      image: "/images/2.png",
      name: "Shoe Name 05",
      price: 3000,
      star: 2.0,
      time: "25 Friday"
    },
    {
      id: 6,
      image: "/images/3.png",
      name: "Shoe Name 06",
      price: 1000,
      star: 4.0,
      time: "28 Monday"
    },
    {
      id: 7,
      image: "/images/1.png",
      name: "Shoe Name 07",
      price: 876,
      star: 4.0,
      time: "28 Monday"
    },
    {
      id: 8,
      image: "/images/2.png",
      name: "Shoe Name 08",
      price: 1650,
      star: 5.0,
      time: "14 Wednesday"
    },
    {
      id: 9,
      image: "/images/3.png",
      name: "Shoe Name 09",
      price: 2345,
      star: 4.0,
      time: "27 Sunday"
    },
    {
      id: 10,
      image: "/images/1.png",
      name: "Shoe Name 10",
      price: 1260,
      star: 1.0,
      time: "26 Saturday"
    },
    {
      id: 11,
      image: "/images/2.png",
      name: "Shoe Name 11",
      price: 650,
      star: 2.0,
      time: "15 Thursday"
    },
    {
      id: 12,
      image: "/images/3.png",
      name: "Shoe Name 12",
      price: 234,
      star: 1.0,
      time: "16 Friday"
    }
  ];

  let list=[];
  shoes.forEach((shoe) => {
        list.push(<Card
          id={shoe.id}
          name={shoe.name}
          price={shoe.price}
          star={shoe.star}
          time={shoe.time}
          image={shoe.image}
        />)
  });

  const [searched , setSearched] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!searched){
      alert("Blank Search");
    }
    else{
      find(searched);
      setSearched("");
    }
  }
  let foundList=[];
  const find=(searched)=>{
    for(let i=0;i<shoes.length;i++) {
      if((shoes[i].name).toLowerCase() === (searched).toLowerCase()){
        alert(shoes[i].name);
      }
      else
        {alert("not found");break;}
    }
  }

  
  
  return(
    <div>
        <div className="header shadow heady">
          <h1 className="text-center" >Shoe Company Name</h1>
          <p className="text-center">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
          <form className="d-flex" onSubmit={submit}>
            <input className="form-control me-2 searchme" type="search" placeholder="Search" aria-label="Search" value={searched} onChange={(e)=>(setSearched(e.target.value))}></input>
            <button className="btn btn-warning" type="submit" >Search</button>
          </form>
        </div>

        <div className="album py-5 bg-light" id="albumm">
          <div className="container">
            <div className="row second">
              <div className="col-8"><h2 id="totalproduct">12 Products</h2></div>
              
              <div className="container">
                <div className="row list" id="repeat">
                  {list}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
