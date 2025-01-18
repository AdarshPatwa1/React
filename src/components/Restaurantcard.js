import { CDN_URL } from "../utils/constants"; // nmaed import

const Restaurantcard = (props) => { // some people destructure like in place of props ({resName, cuisine}) they pass this and they use {resname} {cuisine} in the tags
    const {resData} = props;

    const {
        cloudinaryImageId, 
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla, 
     } = resData?.info;
     
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 transition-all " >
            <img 
            className="w-[250px] h-[150px] rounded-lg "
            alt="res-logo"
            src={ CDN_URL + cloudinaryImageId}
              />
            <h3 className="font-bold py-4 text-lg">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            
        </div>
    )
}

export const withPromotedLabel = (Restaurantcard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        );
    };
};

export default Restaurantcard;