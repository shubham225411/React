// when we wamt to create a complex html dom structure, then using react.createElement will become mess, hence jsx
// jsx is HTML like syntax but it is not html inside javascript
//jsx uses react.createelement BTS
// * babel is converting the jsx to craeteElement code
import React from "react"
import  ReactDOM  from "react-dom/client"

// the below is read by babel library, which gives us browser-compatible code
// the below code is not understood by browsers directly
const heading = (
    <div>
    <h1 id="title">This is from JSX</h1>
    <h1>Hello</h1>
    <h2>Another One
        <ul>
            <li>One</li>
            <li>Two</li>
        </ul>
    </h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);