import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } =
    resData?.info;

  return (
    <Link to={"/restaurants/"+id}>
      <div className="m-4 p-4 w-[330px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className=" font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⁕ </h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.slaString} </h4>
        <h4>User: {loggedInUser} </h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
