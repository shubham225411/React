import React from "react";
import ReactDOM from "react-dom/client";

//React Component
// Functional Component- NEW
// Class Base Component- OLD
// ? In components name starts with a Capital Letter(Not technically manadatory, just a good practise)

// * Functional Component is a javaScript function that rerturns some piece of JSX.

// TODO Its react element just like any javascript normal variable
const header = <h1>Hi ! I am React element</h1>;

const Header = () => {
  return <h1>hello! From Function Component</h1>;
};
const HeaderComponent = () => {
  return (
    <div>
        {/* Using a component inside a componet is called component composition, just like the below line of code */}
        < Header />  {/*  using a Function Component inside another Func Component, can also use like {Header()} */}
        {Header()} {/* we can call it like a simple function, bcz at the end functional componnet are just simple js functions */}
        {header} {/* using a recat element inside a recat Component */}
        {22+4} {/* Inside JSX we can any javascript code inside curly braces */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
