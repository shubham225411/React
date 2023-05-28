import React from "react";
import ReactDOM from "react-dom/client";

// building h1 tag uisng pure React
// this react.createelement takes three arguments, 1) the tag we want to create 2) it is to pass props like id, class of the tag we created
// 3) what we need to put inside the h1 tag
const heading1 = React.createElement(
  "h1",
  {
    id: "header",
    key: "h1"
  },
  "Namaste Everyone From React!!!"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "header2",
    key: "h2"
  },
  "Namaste Everyone From React-Twice!!!"
);

const div = React.createElement("div",{},[heading1,heading2]); // * ? whenever we pass children like this in aaray
// we need to give unique key to each childen. Gave key to header1 and header2
//TODO Read this doc- https://legacy.reactjs.org/docs/reconciliation.html


// * now inserting the heading inside the div#root
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(div);

