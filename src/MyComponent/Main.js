import React, { Component } from 'react';
import Card from "./Card.js";
import $ from 'jquery';

export const Main=()=>{

  const shoes =[
    {
      image: "/images/1.png",
      name: "Shoe Name 01",
      price: 1000,
      star: 4.0,
      time: "29 Tuesday"
    },
    {
      image: "/images/2.png",
      name: "Shoe Name 02",
      price: 1060,
      star: 5.0,
      time: "27 Sunday"
    },
    {
      image: "/images/3.png",
      name: "Shoe Name 03",
      price: 2000,
      star: 3.0,
      time: "28 Monday"
    },
    {
      image: "/images/1.png",
      name: "Shoe Name 04",
      price: 4500,
      star: 5.0,
      time: "25 Friday"
    },
    {
      image: "/images/2.png",
      name: "Shoe Name 05",
      price: 3000,
      star: 2.0,
      time: "25 Friday"
    },
    {
      image: "/images/3.png",
      name: "Shoe Name 06",
      price: 1000,
      star: 4.0,
      time: "28 Monday"
    },
    {
      image: "/images/1.png",
      name: "Shoe Name 07",
      price: 876,
      star: 4.0,
      time: "28 Monday"
    },
    {
      image: "/images/2.png",
      name: "Shoe Name 08",
      price: 1650,
      star: 5.0,
      time: "14 Wednesday"
    },
    {
      image: "/images/3.png",
      name: "Shoe Name 09",
      price: 2345,
      star: 4.0,
      time: "27 Sunday"
    },
    {
      image: "/images/1.png",
      name: "Shoe Name 10",
      price: 1260,
      star: 1.0,
      time: "26 Saturday"
    },
    {
      image: "/images/2.png",
      name: "Shoe Name 11",
      price: 650,
      star: 2.0,
      time: "15 Thursday"
    },
    {
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
          name={shoe.name}
          price={shoe.price}
          star={shoe.star}
          time={shoe.time}
          image={shoe.image}
        />)
  });

  function handleEvent() {
    shoes.sort((a, b) => {
      return b.star - a.star;
    });
    $('#repeat').empty();
    shoes.forEach((shoe) => {
          list.push(<Card
            name={shoe.name}
            price={shoe.price}
            star={shoe.star}
            time={shoe.time}
            image={shoe.image}
          />)
    });
  }

  // $("#pricelh").click(function(){
  //   shoes.sort((a, b) => {
  //     return b.price - a.price;
  //   });
  //   handleEvent();
  // });
  // $("#nameaz").click(function(){
  //   shoes.sort((a, b) => {
  //     let fa = a.name.toLowerCase(),
  //       fb = b.name.toLowerCase();
  //
  //     if (fa < fb) {
  //       return -1;
  //     }
  //     if (fa > fb) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   handleEvent();
  // });
  // $("#deltime").click(function(){
  //   shoes.sort((a, b) => {
  //     let fa = a.time.toLowerCase(),
  //       fb = b.time.toLowerCase();
  //
  //     if (fa < fb) {
  //       return -1;
  //     }
  //     if (fa > fb) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   handleEvent();
  // });
  // $("#star51").click(function(){
  //   shoes.sort((a, b) => {
  //     return b.star - a.star;
  //   });
  // });


  return(
    <div>
        <div className="header shadow heady">
          <h1 className="text-center" >Shoe Company Name</h1>
          <p className="text-center">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <form className="d-flex">
            <input className="form-control me-2 searchme" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-warning" type="submit" >Search</button>
          </form>
      </div>

        <div className="album py-5 bg-light" id="albumm">
          <div className="container">
          <div className="row second">
            <div className="col-8"><h2 id="totalproduct">12 Products</h2></div>
            <div className="col-4 menu">
              <div className="dropdown dpd" id="filterby">
                <button className="btn btn-light shadow dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                  Filter By
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" id="star5" href="#">5 Star</a>
                  <a className="dropdown-item" id="star4" href="#">4 Star</a>
                  <a className="dropdown-item" id="star3" href="#">3 Star</a>
                  <a className="dropdown-item" id="star2" href="#">2 Star</a>
                  <a className="dropdown-item" id="star1" href="#">1 Star</a>
                </div>
                </div>
                <div className="dropdown dpd" id="sortby">
                <button className="btn btn-light shadow dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                  Sort By
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" onClick={handleEvent} id="pricelh" href="/">Price(high-low)</a>
                  <a className="dropdown-item" onClick={handleEvent} id="deltime" href="/">Delivery Time</a>
                  <a className="dropdown-item" onClick={handleEvent} id="nameaz" href="/">Name(A-Z)</a>
                  <a className="dropdown-item" onClick={handleEvent} id="star51" href="/">Star(5-1)</a>
                </div>
                </div>
            </div>
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
