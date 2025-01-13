import Restaurantcard from "./Restaurantcard";
import { useState, useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () => {

    // local state variable - super powerful variable
    const [listOfRestaurants, setListOfResataurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData();  
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // https://proxy.cors.sh/ used for CORS error
        const json = await data.json();
        // optional chaining
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfResataurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>


    //conditional rendering
// if(listOfRestaurants.length === 0){
//     return <Shimmer/> // shimmer ui just to show something before page loads
// }
    return listOfRestaurants.length === 0 ? ( <Shimmer/> ):(
        <div className="body" >
            <div className="filter flex" >
                <div className=" search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    )
                    setFilteredRestaurant(filteredRestaurant);
                    }}
                    >
                        Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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
            </div>
            <div className="res-container flex flex-wrap" >
               {
                filteredRestaurant.map((restaurant) =>  (
                <Link 
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
                >
                <Restaurantcard resData={restaurant} />
                </Link>
            ))}
            </div>
        </div>
    )
}


export default Body;