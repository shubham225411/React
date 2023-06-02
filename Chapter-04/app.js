import React from "react";
import ReactDOM from "react-dom/client";
import {RestaurantList} from "./restaurantData"

// Below peice of code is an React Element , which uses JSX inside it.
const title = (
  <h1 id="title" key="title">
    Food Villa
  </h1>
)

// Below Piece of code is functional component
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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Conatct</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

  )
}

const Restaurant ={
  image :  "https://www.foodandwine.com/thmb/K_t1B_xBKIKYm_ZoNIEqaBvuXcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Burger-King-Everything-Seasoned-Bun-FT-BLOG0922-c8c7859b9c794c42af7700b5b957a874.jpg",
  name: "Burger King",
  cuisines: ["American", "Burger"],
  rating: "3.4"

}

// At the line number 63 we have RestaurantCard function with some arguments, so here we are getting the args in a param called "props"
const RestaurantCard = (props) =>{

  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId}></img>
      <h2>{props.restaurant.data?.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.data?.avgRating} stars</h4>
    </div>
  )
}

// This function was passed arguments on line 82 with spread operators and now we are destructuring the object members here
const RestaurantCardUsingDestructuring = ({name,cloudinaryImageId,cuisines,avgRating}) =>{
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
    <RestaurantCard restaurant= {RestaurantList[0]}/> {/* So here its just like calling a function with arguments, 
    bcz at the end of the functional component in react is a javascript function. 
    So we are calling RestaurantCard with arguments and in arguments we are passing the restaurant list */}
   {/* <RestaurantCardUsingDestructuring {...RestaurantList[1].data} /> {/* Here we are calling the respective function with spread opeartor */}
   {/* <RestaurantCardUsingDestructuring {...RestaurantList[2].data} /> */}
   {/* <RestaurantCardUsingDestructuring {...RestaurantList[3].data} />  */}
   {
    RestaurantList.map((val,idx)=>{
        console.log("insise map function", val.data);
        return <RestaurantCardUsingDestructuring {...val.data} key={val.data.id} />
    })
   }
   
    </div>
   
  )
}

const Footer = () => {
  return(
    <h1>Footer</h1>
  )
}
const AppLayout = () => {
  return (
    // { Header
    //     - Logo
    //     - List Items
    //     - cart

    //   body
    //     - Search Bar
    //     - Restaurant List
    //       - Image
    //       - Name
    //       - Rating
    //       - Cuisines
    //   Footer
    //     - Links
    // TODO JSX can have only one parent element, so when we are returning body, header and footer all together, it will throw us an error
    // TODO To return all these we need to wrap body, header and footer inside a div element, but we dont want an extra div on our body
    // TODO To this rescue comes React.Fragment. It is a component exported by react library
    // TODO React.Fragmemnt is like an empty tag
    // TODO we can also use empty tags instead of React.Fragment
    // * <>
    // * <HeaderComponent />
    // * <Body />
    // * <Footer />
    //  * </>
    
    // ? this is how we pass style to react as an object
    // * <div style= {{backgroun:"red", color: "black"}}>
    // * <HeaderComponent />
    // * <Body />
    // * <Footer />
    //  * </div>

    <React.Fragment >
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>

  )
    }
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
