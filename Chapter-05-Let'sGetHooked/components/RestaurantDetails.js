// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { cloud_img_url } from "../config";
// const RestaurantDetailsCard = (prop) =>{
//     console.log(prop)
//     return (
//         <div>
          
//            <h2>{prop.info.name}</h2>
//            <img src= {cloud_img_url+prop.info.cloudinaryImageId}></img>
//         </div>
//     )
// }
// const RestaurantDetails = () =>{
//     const params = useParams();
//     const {id} = params;
//     const [restaurantDetails, setRestaurantDetails] = useState("");
//     useEffect(()=>{
//         getRestaurantdetails();
//     },[])

//     async function getRestaurantdetails(){
//         const data =await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +id);
//         const result = await data.json();
        
//         setRestaurantDetails(result.data);
        
//     }
//     return (restaurantDetails.length ===0)? <h3>Loading</h3> :(
//         <>
//         <div>
//            <h2>
//            Welcome to Restaurant details Page
//            <h1>{}</h1>
           
//            {/* <RestaurantDetailsCard {...restaurantDetails.cards[0].card.card} /> */}

//             id: {id}
//            </h2>
//         </div>
//         </>
//     )
// }

// export default RestaurantDetails;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        {/* <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;