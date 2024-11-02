import logo from "../Logo.png";

const Header = () => (
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
  </div>
);

export default Header;
