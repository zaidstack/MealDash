import { useState,useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=>{

  // Local State Variable - Super powerful Variable
  
  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  

  useEffect(() => {
     fetchData(); 
   }, []);

   const fetchData = async () => {
     const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     )
           const json = await data.json();
          //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

           
           // Optional chaining
          setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        const onlineStatus = useOnlineStatus();

        if(onlineStatus=== false) 
          return ( 
          <h1>
            Looks like you're offline!! Please check your internet connection..
            </h1>
            );
            
            const  {setUserName,loggedInUser} = useContext(UserContext);
          
    return  listOfRestaurant.length===0 ? (
    <Shimmer /> 
    ):(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
             <input 
             type="text" 
             className="border border-solid border-black" 
             value = {searchText}
             onChange={(e) =>{
              setsearchText(e.target.value);
             }}
             />
             <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={() => {

              console.log(searchText);

       const filteredRestaurant=   listOfRestaurant.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );

          setFilteredRestaurant(filteredRestaurant);
             }}
           >
              Search
             </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label>userName :</label>
              <input className=" border border-black p-2"
              value = {loggedInUser}  
              onChange={(e)=> setUserName(e.target.value)}/>
          </div>
          </div>
          <div className="flex flex-wrap"> 
      {filteredRestaurant?.map((info)=>(
          <RestaurantCard  key ={info?.id} resData = {info}  /> 
        )) }
          </div>
      </div>
    );
  };

  export default Body;
