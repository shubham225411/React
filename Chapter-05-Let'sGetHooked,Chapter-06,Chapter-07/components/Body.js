import { RestaurantList } from "../config";
import { RestaurantCard, RestaurantCardUsingDestructuring } from "./RestaurantCard";
import { useState, useEffect} from "react";
import {Shimmer,NoRestaurantFoundShimmer} from "./Shimmer";
import { Link } from "react-router-dom";
function filterData(restaurants, searchInput){
    if(searchInput==null || searchInput=="") return restaurants;
   return restaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase()));
    
}
const Body = () => {

  // console.log("body rendered")
    //searchInput is a local state variable.
    //useState rerturns an array and setSearchInput is a function provided by react to 
    // change the value of the given lovcal state variable 
    const [searchInput, setSearchInput] = useState("");
    // const [restaurants, setRestaurants] = useState(RestaurantList);
    const [filteredRestaurants, setFilteredRestaurants] = useState("");
    const [allRestaurants, setAllRestaurants] = useState("");
    // useeffect is a kind of hooks in which we pass a callback function
    // it will call the function everytime the component is re-rendered
    //if we dont want to call the function on every re-render, then we pass dependency array to it
    // Like in the below case if the state of searchInput changes, then only useeffect will call the
    // callback function
    // TODO without dependency array, useEffect will call callback fnc only once when the component is 
    // loaded for the first time.
    
    useEffect(()=>{
      // console.log("inside useFeect");
      getRestaurants();

    },[])

    async function getRestaurants(){
      const result = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8979074&lng=77.6371459&page_type=DESKTOP_WEB_LISTING");
      const restaurantListsFromSwiggyApi = await result.json();
      // console.log("fetced apis",restaurantListsFromSwiggyApi);
      setFilteredRestaurants(restaurantListsFromSwiggyApi?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurants(restaurantListsFromSwiggyApi?.data?.cards[2]?.data?.data?.cards);
      
    }
    
    return (allRestaurants.length === 0)?<Shimmer /> :
    // (filteredRestaurants.length === 0) ? <h1>No restaurant</h1> :
    (
      
      <div className="body">
        {/* {console.log("return")} */}
        <div className="search-container">
            <input 
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={(e)=>{
                setSearchInput(e.target.value);
              }}
            />
            <button className="search-btn" onClick={()=>{
                //filter the data
                //update the state- restaurants
               let restaurantsArray = filterData(allRestaurants,searchInput);
               setFilteredRestaurants(restaurantsArray);
              //  console.log("printing the length of filteredRestaurant", filteredRestaurants.length)
            }}>Search</button>
        </div>
      {/* <RestaurantCard restaurant= {RestaurantList[0]}/> */}
       {/* So here its just like calling a function with arguments, 
      bcz at the end of the functional component in react is a javascript function. 
      So we are calling RestaurantCard with arguments and in arguments we are passing the restaurant list */}
     {/* <RestaurantCardUsingDestructuring {...RestaurantList[1].data} /> {/* Here we are calling the respective function with spread opeartor */}
     {/* <RestaurantCardUsingDestructuring {...RestaurantList[2].data} /> */}
     {/* <RestaurantCardUsingDestructuring {...RestaurantList[3].data} />  */}
     <div className="cards-body">
     { 
      (filteredRestaurants.length ===0)? <NoRestaurantFoundShimmer /> :
      filteredRestaurants.map((val,idx)=>{
        //  console.log("insise map function", val.data);
          return (
            <Link to={"/restaurant/" + val.data.id} key={val.data.id}>
          <RestaurantCardUsingDestructuring {...val.data} />
          </Link>
          )
      })

     }
     </div>
     
      </div>
    )
  }

  export default Body;