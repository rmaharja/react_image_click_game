import React from "react";


const Navbar = ({message}) => (
  
  <div className="navbar-fixed">
  <nav className = "color light black lighten-3">
    <div className="nav-wrapper">
      <a href="index.html" className="brand-logo left">react  clickGame </a>
      <div className="brand-logo center"> {message} </div>
    </div>
  </nav>
  </div>
  
)

export default Navbar;
