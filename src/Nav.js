import React from "react";
import Logo from "./Netflix.png";
import { useEffect } from "react";
import "./Nav.css";
console.log(Logo);
function Nav() {
  const [show, handleShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img src={Logo} alt="logo1" className="nav-logo" />
    </div>
  );
}

export default Nav;
