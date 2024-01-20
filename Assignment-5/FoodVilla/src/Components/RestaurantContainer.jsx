import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css'
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../Data/Restaurant'
import Shimmer from './Shimmer';

function filterData(searchText, restaurants){
    const filterData = restaurants.filter( (restaurant) =>
        restaurant.title.includes(searchText)
    )
    return filterData;
}

const RestaurantContainer = () => {
    const [allRestarant, setAllRestarant] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        getRestaurants();
    }, []);
    
    async function getRestaurants() {
        const data = await fetch(
            'https://api.escuelajs.co/api/v1/products'
        );

        const json = await data.json();
        // console.log(json)
        setAllRestarant(json)
        setFilteredRestaurants(json);
    }

    if(!allRestarant) return null;

    if(filteredRestaurants?.length === 0) return <h1>No restaurant Found!</h1>

    return allRestarant.length === 0 ? (<Shimmer/> ) : (
        <>
            <div className="form-container p-4">
                <div className="d-flex mx-2">
                    <input className="form-control me-2" placeholder="Search" aria-label="Search" value={searchText} onChange={(e)=>{ setSearchText(e.target.value)}}/>
                    <button className="btn btn-success" onClick={()=>{    
                        const data = filterData(searchText, allRestarant);
                        setFilteredRestaurants(data);
                    }}>Search</button>
                </div>
            </div>
            <div className='card-container'>
                {
                    filteredRestaurants.map((restaurant) =>{
                        return <RestaurantCard {...restaurant} key={restaurant.id} />
                    })
                }
            </div>
        </>
    );
}

export default RestaurantContainer
