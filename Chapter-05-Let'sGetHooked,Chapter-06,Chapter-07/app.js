import React from "react";
import ReactDOM from "react-dom/client";
import {RestaurantList} from "./config"
//default import,we can rename the import
import HeaderComponent  from "./components/Header";
// we can import everything like this and then do header.Title
import * as header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantDetails";
import Profile from "./components/Profile";

// Below peice of code is an React Element , which uses JSX inside it.
const title = (
  <h1 id="title" key="title">
    Food Villa
  </h1>
)

// Below Piece of code is functional component




const Restaurant ={
  image :  "https://www.foodandwine.com/thmb/K_t1B_xBKIKYm_ZoNIEqaBvuXcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Burger-King-Everything-Seasoned-Bun-FT-BLOG0922-c8c7859b9c794c42af7700b5b957a874.jpg",
  name: "Burger King",
  cuisines: ["American", "Burger"],
  rating: "3.4"

}

// At the line number 63 we have RestaurantCard function with some arguments, so here we are getting the args in a param called "props"



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
      <Outlet/>
      <Footer />
    </React.Fragment>

  )
    }

// ? whatever is in the children will go the outlet part and get shown on the DOM.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          },
        ],
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }

    ]
  }
  
])
 
// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);