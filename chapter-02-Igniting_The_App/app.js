import React from "react";
import ReactDOM from "react-dom/client";

const h2 = React.createElement("h2", { id: "h2" }, "This is h2 Header");
const para = React.createElement("p", { id: "para" }, "this is Para");
const h1 = React.createElement("h1", { id: "h1" }, [para]);

const div = React.createElement("div", { id: "container" }, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);