import { cloud_img_url } from "../config"
export const RestaurantCard = (props) =>{

    return (
      <div className="card">
        <img src={cloud_img_url+props.restaurant.data?.cloudinaryImageId}></img>
        <h2>{props.restaurant.data?.name}</h2>
        <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
        <h4>{props.restaurant.data?.avgRating} stars</h4>
      </div>
    )
  }
  
  // This function was passed arguments on line 82 with spread operators and now we are destructuring the object members here
  export const RestaurantCardUsingDestructuring = ({name,cloudinaryImageId,cuisines,avgRating}) =>{
    return (
      <div className="card">
        <img src={cloud_img_url+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
      </div>
    )
  }