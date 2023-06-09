
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Shimmer } from "./Shimmer";
import { cloud_img_url } from "../config";

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
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8979074&lng=77.6371459&restaurantId="+resId+"&submitAction=ENTER"
    );
    const json = await data.json();
    setRestauraunt(json.data);
    console.log("printing json.data", json.data?.cards[0]?.card?.card?.info?.name);
    console.log("printing restairant", restaurant)
    
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img src={cloud_img_url + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
      </div>
    </div>
  );
};

export default RestaurantMenu;