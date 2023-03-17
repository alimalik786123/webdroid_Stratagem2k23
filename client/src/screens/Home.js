import React from "react";
import shape from '../img/shape.png'
import logo from '../img/logo.png'
import person from '../img/doc.jpg'
const Home=()=>{
    return (<><main>
        <div class="big-wrapper light">
          <img src={shape} alt="" class="shape" />
  
          <header>
            <div class="container">
              <div class="logo">
                <img src={logo} alt="Logo" />
                <h3>Danvo in a new branch</h3>
              </div>
  
              <div class="links">
                <ul>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Hospitals near me</a></li>
                  <li><a href="#">Past appointments</a></li>
                  <li><a href="#" class="btn">Sign up</a></li>
                  <li><a href="#" class="btn">Sign up</a></li>
                </ul>
              </div>
  
              <div class="overlay"></div>
  
              <div class="hamburger-menu">
                <div class="bar"></div>
              </div>
            </div>
          </header>
  
          <div class="showcase-area">
            <div class="container">
              <div class="left">
                <div class="big-title">
                  <h1>Fast and secure way</h1>
                  <h1>Book your appointment now</h1>
                </div>
                <p class="text">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus eius distinctio odit, magni magnam qui ex perferendis
                  vitae! */}
                </p>
                <div class="cta">
                  <a href="#" class="btn m-2 text-black">Book ward</a>
                  <a href="#" class="btn m-2">Hospital registration</a>
                  <a href="#" class="btn m-2">Emergency</a>
                </div>
              </div>
  
              <div class="right">
                <img src={person} alt="Person Image" class="person" />
              </div>
            </div>
          </div>
  
          <div class="bottom-area">
            <div class="container">
              <button class="toggle-btn">
                <i class="far fa-moon"></i>
                <i class="far fa-sun"></i>
              </button>
            </div>
          </div>
        </div>
      </main></>)
}
export default Home