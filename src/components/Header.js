import { useEffect, useState } from "react";
import logo from "../Logo.png";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="header-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="header-nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="loginBtn"
        onClick={() => {
          btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
        }}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Header;
