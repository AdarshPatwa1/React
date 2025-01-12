// import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


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
    
    return   (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwo}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        { item.card.info.name } - {"₹"}
                        {item.card.info.price / 100  || item.card.info.defaultPrice / 100 }
                    </li>
                )
                )}
               {/* <li>{itemCards[0].card.info.name}</li> 
               <li>{itemCards[1].card.info.name}</li>  */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;