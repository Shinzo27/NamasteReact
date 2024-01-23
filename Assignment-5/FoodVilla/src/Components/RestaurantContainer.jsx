import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function filterData(searchText, restaurants){
    const filterData = restaurants.filter( (restaurant) =>
        restaurant.title.toLowerCase().includes(searchText.toLowerCase())
    )
    // console.log(filterData)
    return filterData;
}

const RestaurantContainer = () => {
    const [allRestaurant, setAllRestaurant] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        getRestaurants();
    }, []);
    
    async function getRestaurants() {
        const data = await fetch(
            'https://fakestoreapi.com/products'
        );

        const json = await data.json();
        // console.log(json)
        setAllRestaurant(json)
        setFilteredRestaurants(json);
    }

    if(!allRestaurant) return null;

    return allRestaurant.length === 0 ? (<Shimmer/> ) : (
        <>
            <div className="form-container p-4">
                <div className="d-flex mx-2">
                    <input className="form-control me-2" placeholder="Search" aria-label="Search" value={searchText} onChange={(e)=>{ setSearchText(e.target.value)}}/>
                    <button className="btn btn-success" onClick={()=>{    
                        const data = filterData(searchText, allRestaurant);
                        setFilteredRestaurants(data);
                    }}>Search</button>
                </div>
            </div>
            <div className='card-container'>
                {
                    (filteredRestaurants.length === 0) ? <h1>No restaurant Found</h1> :
                    filteredRestaurants.map((restaurant) =>{
                        return (
                            <Link to={"/product/"+restaurant.id} key={restaurant.id}>
                                <RestaurantCard {...restaurant} />
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default RestaurantContainer
