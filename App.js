import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/Logo.png";

/*****
 * <h1> Hello World from React </h1>
 * <div id="parent">
 *  <div id="child1">
 *     <h1>I am first h1 tag </h1>
 *     <h1>I am second h1 tag </h1>
 *  </div>
 *  <div id="child2">
 *      <h1>I am third h1 tag </h1>
 *   </div>
 * </div>
 *
 * ******/

const elements = React.createElement(
  "div",
  { id: "parent", className: "parent_div" },
  [
    React.createElement("div", { id: "children1", className: "children_div" }, [
      React.createElement(
        "h1",
        { id: "header1" },
        "Hello World from h1 Element"
      ),
      React.createElement(
        "h2",
        { id: "header2", className: "header" },
        "Hello World from h2 Element"
      ),
    ]),
    React.createElement("div", { id: "children2", className: "children_div" }, [
      React.createElement(
        "h3",
        { id: "header3" },
        "Hello World from h3 Element"
      ),
      React.createElement(
        "h4",
        { id: "header4", className: "header" },
        "Hello World from h4 Element"
      ),
    ]),
  ]
);

/**** React Component ****/
const Title = () => <h1>Namaste React Title</h1>;

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

const RestCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/f5aa099b-4e04-4017-9fc6-8aa7b6b22ac1_104680.JPG"
      ></img>
      <h3 className="res-card-name">Domino's</h3>
      <h4 className="res-card-cuisine">Italian</h4>
      <h4 className="res-card-rating">4.4</h4>
      <h4 className="res-card-eta">38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestCard></RestCard>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div class="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
