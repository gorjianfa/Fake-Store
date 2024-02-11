import React from "react";import { Link } from "react-router-dom";
 import About from "../assets/image/users.svg";
 import Product from "../assets/image/apps.svg";
 import Home from "../assets/image/home.svg";
 import buy from "../assets/image/shopping-cart.svg";
function App() {

  return (
    <div className="bg-sidebar w-25">
      <div className="container-fluid ">
        <div className=" p-3 d-flex flex-coulmn gap-2">
          <h1 className="">Menu</h1>
          <span
            className="text-color "
           
          > <img src={Home} /> <Link   className="  m-3 text-decoration-none h3" to='/home'>Contact Us</Link>
            
          </span>
          <span className="text-color "> <img src={About} /> <Link   className=" m-3 text-decoration-none h3" to='/about'>About Us</Link></span>
          <span className="text-color ">  <img src={Product} /> <Link   className=" m-3  text-decoration-none h3" to='/'>Products</Link></span>
           <span  className="text-color  d-flex">  <img src={buy} />  <Link   className=" m-3 text-nowrap  text-decoration-none h3 " to='/selection'>Product Selection</Link></span>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
