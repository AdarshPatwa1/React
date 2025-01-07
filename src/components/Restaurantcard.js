import { CDN_URL } from "../utils/constants"; // nmaed import

const Restaurantcard = (props) => { // some people destructure like in place of props ({resName, cuisine}) they pass this and they use {resname} {cuisine} in the tags
    const {resData} = props;

    const {
        cloudinaryImageId, 
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime, 
     } = resData?.data;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={ CDN_URL
                 +
                cloudinaryImageId
              }
              />
            <h3>{name}</h3> 
            <h4>{cuisines.join(" ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo} / 100</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    )
}


export default Restaurantcard;