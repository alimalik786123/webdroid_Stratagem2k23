import React from "react";
import "../Style.css"
import "../img/logo.png"
const Navbar=()=>{
    return(<div class="container">
    <div class="logo">
      <img src="./img/logo.png" alt="Logo" />
      <h3>Danvo in a new branch</h3>
    </div>

    <div class="links">
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#" class="btn">Sign up</a></li>
      </ul>
    </div></div>)
}
export default Navbar