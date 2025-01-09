import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockdata";
import { useState, useEffect} from "react";
import Shimmer from "./shimmer";


const Body = () => {

    // local state variable - super powerful variable
    const [listOfRestaurants, setListOfResataurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData();  
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // https://proxy.cors.sh/ used for CORS error
        const json = await data.json();
        // optional chaining
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfResataurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
// if(listOfRestaurants.length === 0){
//     return <Shimmer/> // shimmer ui just to show something before page loads
// }
    return listOfRestaurants.length === 0 ? ( <Shimmer/> ):(
        <div className="body" >
            <div className="filter" >
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    )
                    setFilteredRestaurant(filteredRestaurant);
                    }}
                    >
                        Search</button>
                </div>
                <button 
                className="filter-btn"
                onClick={() => {
                    const filteredList= listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
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
                filteredRestaurant.map((restaurant) =>  (
                <Restaurantcard key={restaurant.info.id} resData={restaurant} />
            ))}
            </div>
        </div>
    )
}


export default Body;