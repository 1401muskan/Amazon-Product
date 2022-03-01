// eslint-disable-next-line
import React from 'react';
import $ from 'jquery';

export const Main=()=>{

  const shoename=["Shoe01","Shoe02","Shoe03","Shoe04","Shoe05","Shoe06","Shoe07","Shoe08","Shoe09"];
  const shoeprice=[2000,3000,1000,1500,6500,8900,4566,1111,2345];
  var noofproduct = 0;
  const shoes =[
  	{
  		image: "1.png",
  		name: "Shoe Name 01",
  		price: 1000,
  		star: 4.0,
  		time: "29 Tuesday"
  	},
  	{
  		image: "2.png",
  		name: "Shoe Name 02",
  		price: 1060,
  		star: 5.0,
  		time: "27 Sunday"
  	},
  	{
  		image: "3.png",
  		name: "Shoe Name 03",
  		price: 2000,
  		star: 3.0,
  		time: "28 Monday"
  	},
  	{
  		image: "1.png",
  		name: "Shoe Name 04",
  		price: 4500,
  		star: 5.0,
  		time: "25 Friday"
  	},
  	{
  		image: "2.png",
  		name: "Shoe Name 05",
  		price: 3000,
  		star: 2.0,
  		time: "25 Friday"
  	},
  	{
  		image: "3.png",
  		name: "Shoe Name 06",
  		price: 1000,
  		star: 4.0,
  		time: "28 Monday"
  	},
  	{
  		image: "1.png",
  		name: "Shoe Name 07",
  		price: 876,
  		star: 4.0,
  		time: "28 Monday"
  	},
  	{
  		image: "2.png",
  		name: "Shoe Name 08",
  		price: 1650,
  		star: 5.0,
  		time: "14 Wednesday"
  	},
  	{
  		image: "3.png",
  		name: "Shoe Name 09",
  		price: 2345,
  		star: 4.0,
  		time: "27 Sunday"
  	},
  	{
  		image: "1.png",
  		name: "Shoe Name 10",
  		price: 1260,
  		star: 1.0,
  		time: "26 Saturday"
  	},
  	{
  		image: "2.png",
  		name: "Shoe Name 11",
  		price: 650,
  		star: 2.0,
  		time: "15 Thursday"
  	},
  	{
  		image: "3.png",
  		name: "Shoe Name 12",
  		price: 234,
  		star: 1.0,
  		time: "16 Friday"
  	}
  ];
  var templateString;

  $.each(shoes, function (i) {
      templateString = `
      	<div class="col-md-4">
      		<div class="card mb-4 shadow-sm" >
      			<img id="shoeimg" src="/images/`+shoes[i].image+`" class="card-img-top" width="240px" height="150px">
      			<div class="card-body">
      			<div class="justify-content-between align-items-center">
      				<hr>
      				<div class="row">
      					<div class="col"><h5 id="shoename" class="card-img-header">`+shoes[i].name+`</h5><br></div>
      					<div class="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
      				</div>
      				<div class="row">
      					<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
      				</div>
      				<div class="row">
      					<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
      				</div>
      			</div>
      			</div>
      		</div>
      	</div>
      	`;
      $('#repeat').append(templateString);
  });

  $("#pricelh").click(function(){
  	shoes.sort((a, b) => {
  		return b.price - a.price;
  	});
  	viewonly();
  });
  $("#nameaz").click(function(){
  	shoes.sort((a, b) => {
  		let fa = a.name.toLowerCase(),
  			fb = b.name.toLowerCase();

  		if (fa < fb) {
  			return -1;
  		}
  		if (fa > fb) {
  			return 1;
  		}
  		return 0;
  	});
  	viewonly();
  });
  $("#deltime").click(function(){
  	shoes.sort((a, b) => {
  		let fa = a.time.toLowerCase(),
  			fb = b.time.toLowerCase();

  		if (fa < fb) {
  			return -1;
  		}
  		if (fa > fb) {
  			return 1;
  		}
  		return 0;
  	});
  	viewonly();
  });
  $("#star51").click(function(){
  	shoes.sort((a, b) => {
  		return b.star - a.star;
  	});
  	viewonly();
  });
  function viewonly(){
  	noofproduct = shoes.length;
  	$('#repeat').empty();
  	$("#totalproduct").text("Products "+noofproduct);
  	$.each(shoes, function (i) {
  		var templateString = `
  		<div class="col-md-4">
  			<div class="card mb-4 shadow-sm" >
  				<img id="shoeimg" src="/images/`+shoes[i].image+`" class="card-img-top" width="240px" height="150px">
  				<div class="card-body">
  				<div class="justify-content-between align-items-center">
  					<hr>
  					<div class="row">
  						<div class="col"><h5 id="shoename" class="card-img-header">`+shoes[i].name+`</h5><br></div>
  						<div class="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
  					</div>
  					<div class="row">
  						<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
  					</div>
  					<div class="row">
  						<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
  					</div>
  				</div>
  				</div>
  			</div>
  		</div>
  			`;
  		$('#repeat').append(templateString);
  	});
  }

  var newstar=[];
  $("#star5").click(function(){
  	newstar=[];
  	for(var i=0;i<shoes.length;i++){
  		if (shoes[i].star===5) {
  			newstar.push(shoes[i]);
  		}
  	}
  	starviewonly();
  });
  $("#star4").click(function(){
  	newstar=[];
  	for(var i=0;i<shoes.length;i++){
  		if (shoes[i].star===4) {
  			newstar.push(shoes[i]);
  		}
  	}
  	starviewonly();
  });
  $("#star3").click(function(){
  	newstar=[];
  	for(var i=0;i<shoes.length;i++){
  		if (shoes[i].star===3) {
  			newstar.push(shoes[i]);
  		}
  	}
  	starviewonly();
  });
  $("#star2").click(function(){
  	newstar=[];
  	for(var i=0;i<shoes.length;i++){
  		if (shoes[i].star===2) {
  			newstar.push(shoes[i]);
  		}
  	}
  	starviewonly();
  });
  $("#star1").click(function(){
  	newstar=[];
  	for(var i=0;i<shoes.length;i++){
  		if (shoes[i].star===1) {
  			newstar.push(shoes[i]);
  		}
  	}
  	starviewonly();
  });
  function starviewonly(){
  	noofproduct = newstar.length;
  	$('#repeat').empty();
  	$("#totalproduct").text("Products "+noofproduct);
  	$.each(newstar, function (i) {
  		templateString = `
    		<div class="col-md-4">
    			<div class="card mb-4 shadow-sm" >
    				<img id="shoeimg" src="/images/`+newstar[i].image+`" class="card-img-top" width="240px" height="150px">
    				<div class="card-body">
    				<div class="justify-content-between align-items-center">
    					<hr>
    					<div class="row">
    						<div class="col"><h5 id="shoename" class="card-img-header">`+newstar[i].name+`</h5><br></div>
    						<div class="col"><h6 id="shoestar">★`+newstar[i].star+`.0</h6></div>
    					</div>
    					<div class="row">
    						<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+newstar[i].price+`.00</h5><br></div>
    					</div>
    					<div class="row">
    						<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+newstar[i].time+`</h6></div>
    					</div>
    				</div>
    				</div>
    			</div>
    		</div>
  			`;
  		$('#repeat').append(templateString);
  	});
  }


  return(
    <div>
        <div class="header shadow heady">
          <h1 class="text-center" >Shoe Company Name</h1>
          <p class="text-center">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="album py-5 bg-light" id="albumm">
          <div class="container">
          <div class="row second">
            <div class="col-8"><h2 id="totalproduct">12 Products</h2></div>
            <div class="col-4 menu">
              <div class="dropdown dpd" id="filterby">
                <button class="btn btn-light shadow dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                  Filter By
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" id="star5" href="#">5 Star</a>
                  <a class="dropdown-item" id="star4" href="#">4 Star</a>
                  <a class="dropdown-item" id="star3" href="#">3 Star</a>
                  <a class="dropdown-item" id="star2" href="#">2 Star</a>
                  <a class="dropdown-item" id="star1" href="#">1 Star</a>
                </div>
                </div>
                <div class="dropdown dpd" id="sortby">
                <button class="btn btn-light shadow dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                  Sort By
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" id="nameaz" href="#">Name(A-Z)</a>
                  <a class="dropdown-item" id="pricelh" href="#">Price(high-low)</a>
                    <a class="dropdown-item" id="deltime" href="#">Delivery Time</a>
                  <a class="dropdown-item" id="star51" href="#">Star(5-1)</a>
                </div>
                </div>
            </div>

          </div>
          <div class="row list" id="repeat"></div>
          </div>
        </div>
    </div>
  )
}
