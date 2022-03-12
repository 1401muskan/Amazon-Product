// import React from 'react';
// import { Link } from 'react-router-dom';
//
// function CardItem(props) {
//   return (
//     <>
//       // <div className="col-md-4">
//       //   <div className="card mb-4 shadow-sm" >
//       //     <img id="shoeimg" src="/images/`+shoes[i].image+`" className="card-img-top" width="240px" height="150px">
//       //     <div className="card-body">
//       //     <div className="justify-content-between align-items-center">
//       //       <hr>
//       //       <div className="row">
//       //         <div className="col"><h5 id="shoename" className="card-img-header">`+{props.name}+`</h5><br></br></div>
//       //         <div className="col"><h6 id="shoestar">★`+{props.star}+`.0</h6></div>
//       //       </div>
//       //       <div className="row">
//       //         <div className="col"><h5 id="shoeprice" className="card-img-sidebar">₹`+{props.price}+`.00</h5><br></br></div>
//       //       </div>
//       //       <div className="row">
//       //         <div className="col"><h6 id="shoetime" className="card-img-footer text-muted">Delivery by: `+{props.time}+`</h6></div>
//       //       </div>
//       //     </div>
//       //     </div>
//       //   </div>
//       // </div>
//
//       <li classNameName='cards__item'>
//         <Link classNameName='cards__item__link' to={props.path}>
//           <figure classNameName='cards__item__pic-wrap' data-category={props.label}>
//             <img classNameName='cards__item__img' alt='TravelImage' src={props.src} />
//           </figure>
//           <div classNameName='cards__item__info'>
//             <h5 classNameName='cards__item__text'>{props.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// }
//
// export default CardItem;

//
// const shoename=["Shoe01","Shoe02","Shoe03","Shoe04","Shoe05","Shoe06","Shoe07","Shoe08","Shoe09"];
// const shoeprice=[2000,3000,1000,1500,6500,8900,4566,1111,2345];
// var noofproduct = 0;
// const shoes =[
//   {
//     image: "1.png",
//     name: "Shoe Name 01",
//     price: 1000,
//     star: 4.0,
//     time: "29 Tuesday"
//   },
//   {
//     image: "2.png",
//     name: "Shoe Name 02",
//     price: 1060,
//     star: 5.0,
//     time: "27 Sunday"
//   },
//   {
//     image: "3.png",
//     name: "Shoe Name 03",
//     price: 2000,
//     star: 3.0,
//     time: "28 Monday"
//   },
//   {
//     image: "1.png",
//     name: "Shoe Name 04",
//     price: 4500,
//     star: 5.0,
//     time: "25 Friday"
//   },
//   {
//     image: "2.png",
//     name: "Shoe Name 05",
//     price: 3000,
//     star: 2.0,
//     time: "25 Friday"
//   },
//   {
//     image: "3.png",
//     name: "Shoe Name 06",
//     price: 1000,
//     star: 4.0,
//     time: "28 Monday"
//   },
//   {
//     image: "1.png",
//     name: "Shoe Name 07",
//     price: 876,
//     star: 4.0,
//     time: "28 Monday"
//   },
//   {
//     image: "2.png",
//     name: "Shoe Name 08",
//     price: 1650,
//     star: 5.0,
//     time: "14 Wednesday"
//   },
//   {
//     image: "3.png",
//     name: "Shoe Name 09",
//     price: 2345,
//     star: 4.0,
//     time: "27 Sunday"
//   },
//   {
//     image: "1.png",
//     name: "Shoe Name 10",
//     price: 1260,
//     star: 1.0,
//     time: "26 Saturday"
//   },
//   {
//     image: "2.png",
//     name: "Shoe Name 11",
//     price: 650,
//     star: 2.0,
//     time: "15 Thursday"
//   },
//   {
//     image: "3.png",
//     name: "Shoe Name 12",
//     price: 234,
//     star: 1.0,
//     time: "16 Friday"
//   }
// ];
// var templateString;
//
// $.each(shoes, function (i) {
//     templateString = `
//       <div className="col-md-4">
//         <div className="card mb-4 shadow-sm" >
//           <img id="shoeimg" src="/images/`+shoes[i].image+`" className="card-img-top" width="240px" height="150px">
//           <div className="card-body">
//           <div className="justify-content-between align-items-center">
//             <hr>
//             <div className="row">
//               <div className="col"><h5 id="shoename" className="card-img-header">`+shoes[i].name+`</h5><br></div>
//               <div className="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
//             </div>
//             <div className="row">
//               <div className="col"><h5 id="shoeprice" className="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
//             </div>
//             <div className="row">
//               <div className="col"><h6 id="shoetime" className="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
//             </div>
//           </div>
//           </div>
//         </div>
//       </div>
//       `;
//     $('#repeat').append(templateString);
// });
// //
// $("#pricelh").click(function(){
//   shoes.sort((a, b) => {
//     return b.price - a.price;
//   });
//   viewonly();
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
//   viewonly();
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
//   viewonly();
// });
// $("#star51").click(function(){
//   shoes.sort((a, b) => {
//     return b.star - a.star;
//   });
//   viewonly();
// });
// function viewonly(){
//   noofproduct = shoes.length;
//   $('#repeat').empty();
//   $("#totalproduct").text("Products "+noofproduct);
//   $.each(shoes, function (i) {
//     var templateString = `
//     <div className="col-md-4">
//       <div className="card mb-4 shadow-sm" >
//         <img id="shoeimg" src="/images/`+shoes[i].image+`" className="card-img-top" width="240px" height="150px">
//         <div className="card-body">
//         <div className="justify-content-between align-items-center">
//           <hr>
//           <div className="row">
//             <div className="col"><h5 id="shoename" className="card-img-header">`+shoes[i].name+`</h5><br></div>
//             <div className="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h5 id="shoeprice" className="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6 id="shoetime" className="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//       `;
//     $('#repeat').append(templateString);
//   });
// }
//
// var newstar=[];
// $("#star5").click(function(){
//   newstar=[];
//   for(var i=0;i<shoes.length;i++){
//     if (shoes[i].star===5) {
//       newstar.push(shoes[i]);
//     }
//   }
//   starviewonly();
// });
// $("#star4").click(function(){
//   newstar=[];
//   for(var i=0;i<shoes.length;i++){
//     if (shoes[i].star===4) {
//       newstar.push(shoes[i]);
//     }
//   }
//   starviewonly();
// });
// $("#star3").click(function(){
//   newstar=[];
//   for(var i=0;i<shoes.length;i++){
//     if (shoes[i].star===3) {
//       newstar.push(shoes[i]);
//     }
//   }
//   starviewonly();
// });
// $("#star2").click(function(){
//   newstar=[];
//   for(var i=0;i<shoes.length;i++){
//     if (shoes[i].star===2) {
//       newstar.push(shoes[i]);
//     }
//   }
//   starviewonly();
// });
// $("#star1").click(function(){
//   newstar=[];
//   for(var i=0;i<shoes.length;i++){
//     if (shoes[i].star===1) {
//       newstar.push(shoes[i]);
//     }
//   }
//   starviewonly();
// });
// function starviewonly(){
//   noofproduct = newstar.length;
//   $('#repeat').empty();
//   $("#totalproduct").text("Products "+noofproduct);
//   $.each(newstar, function (i) {
//     templateString = `
//       <div className="col-md-4">
//         <div className="card mb-4 shadow-sm" >
//           <img id="shoeimg" src="/images/`+newstar[i].image+`" className="card-img-top" width="240px" height="150px">
//           <div className="card-body">
//           <div className="justify-content-between align-items-center">
//             <hr>
//             <div className="row">
//               <div className="col"><h5 id="shoename" className="card-img-header">`+newstar[i].name+`</h5><br></div>
//               <div className="col"><h6 id="shoestar">★`+newstar[i].star+`.0</h6></div>
//             </div>
//             <div className="row">
//               <div className="col"><h5 id="shoeprice" className="card-img-sidebar">₹`+newstar[i].price+`.00</h5><br></div>
//             </div>
//             <div className="row">
//               <div className="col"><h6 id="shoetime" className="card-img-footer text-muted">Delivery by: `+newstar[i].time+`</h6></div>
//             </div>
//           </div>
//           </div>
//         </div>
//
//       </div>
//       `;
//     $('#repeat').append(templateString);
//   });
// }
