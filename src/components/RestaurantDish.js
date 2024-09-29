import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDish from "../utils/useRestaurantDish";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDish = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantDish(resId);

  const [showIndex , setShowIndex] = useState(1);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      // controlled component
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index===showIndex ? true : false}
          setShowIndex = {()=> setShowIndex(index)}
          dummy ={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantDish;
