import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement=>ReactElement-JS Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log("heading", heading);

//JSX=> Babel transpiler to it React.createElement=>ReactElement-Js Object => HTMLElement(render)

//React Element

//React Functional Component

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
    {/* <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()} */}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
