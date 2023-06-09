import { useState } from "react"
import { Link } from "react-router-dom"
const Title = () => {
    return (
      <a href="/"> {/*when we give href=/, it will load the current page after clicking */}
       <img alt="Food Villa Logo" className="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0" >
        </img>
        </a>
    )
 }
 const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Conatct</li></Link>
          <li>Cart</li>
        </ul>
        {(isLoggedIn)? <button onClick={() =>setIsLoggedIn(false)}>Log Out</button> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>}
      </div>
    </div>

  )
}
//* we can export default one thing
 export default HeaderComponent;


 // if we want to import multiple things then
//  export const obj={};
 // then we will import it as
//  import {obj} from "./component/Header"