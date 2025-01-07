import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {

    //state variable - super powerful variable
    const [listOfRestaurants, setListOfResataurant] = useState(resList);

    return(
        <div className="body" >
            <div className="filter" >
                <button 
                className="filter-btn"
                onClick={() => {
                    const filteredList= listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfResataurant(filteredList);
                    // console.log(filteredList);
                }} 
                >
                Top Rated Restaurant
                </button>
            </div>
            <div className="res-container" >
               {
                listOfRestaurants.map((restaurant) =>  (
                <Restaurantcard key={restaurant.data.id} resData={restaurant} />
            ))}
            </div>
        </div>
    )
}


export default Body;