import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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

const AppLayout = () => {
  return (
    <div class="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
