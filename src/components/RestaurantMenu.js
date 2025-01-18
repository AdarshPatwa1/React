// import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId); // custom hook

    if(resInfo === null) return <Shimmer />;

    const { name,
         cuisines,
          costForTwo
         } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories =
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c =>
             c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    );
    // console.log(categories);


    return   (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwo}
            </p>
            {/* categories accordians*/}
            {categories.map((category) => (
                <RestaurantCategory key={category?.card?.card?.title} data = {category?.card?.card}/>
            ))}





            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        { item.card.info.name } - {"₹"}
                        {item.card.info.price / 100  || item.card.info.defaultPrice / 100 }
                    </li>
                )
                )}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;