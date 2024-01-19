import React from 'react'
import { useState } from 'react';
import '../App.css'
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../Data/Restaurant'

function filterData(searchText, restaurants){
    const filterData = restaurants.filter( (restaurant) =>
        restaurant.name.includes(searchText)
    )
    return filterData;
}

const RestaurantContainer = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("")
    return (
        <>
            <div className="form-container p-4">
                <div className="d-flex mx-2">
                    <input className="form-control me-2" placeholder="Search" aria-label="Search" value={searchText} onChange={(e)=>{ setSearchText(e.target.value)}}/>
                    <button className="btn btn-success" onClick={()=>{
                        if(searchText==""){
                            setRestaurants(restaurantList)
                        }
                        else{
                            const data = filterData(searchText, restaurants);
                            setRestaurants(data);
                        }
                    }}>Search</button>
                </div>
            </div>
            <div className='card-container'>
                {
                    restaurants.map((restaurant) =>{
                        return <RestaurantCard {...restaurant} key={restaurant.id} />
                    })
                }
            </div>
        </>
    );
}

export default RestaurantContainer
