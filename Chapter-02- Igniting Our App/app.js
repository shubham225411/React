import React from "react";
import ReactDOM from "react-dom/client";

// building h1 tag uisng pure React
// this react.createelement takes three arguments, 1) the tag we want to create 2) it is to pass props like id, class of the tag we created
// 3) what we need to put inside the h1 tag
const heading1 = React.createElement(
  "h1",
  {
    id: "header",
  },
  "Namaste Everyone From React!!!"
);

//now inserting the heading inside the div#root
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);

