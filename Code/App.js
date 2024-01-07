import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement => object => HTMLelement(render)
const parent = React.createElement("div", { id: "parent" }, "Hi from React");

//JSX - HTML like or XML like syntax

const Jsxelement = () => {
  return <h1 id="header">Hi from JSX</h1>;
  }
  
  const num = 5;
  
  const FunctionalComponent = () => {
    return (
      <div id="container">
        {/* this is comment inside JSX */}
         {/* calling another functional component  */}
        <Jsxelement/>
        {/* calling as a Javascript function - must have () as a function */}
        {Jsxelement()}
        {/* using expressions */}
        {num}
        {7 + 6}
        <h1 id="functional">Hi from Functional Component</h1>
      </div>
    );
  };

   const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<FunctionalComponent/>);
