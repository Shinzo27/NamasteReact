import { useState } from 'react';
import '../App.css'
import RestaurantCard from './RestaurantCard';

let restaurantDetails = [  
    {  
        "name":"Cheesecake Factory",
        "cuisine":"American",
        "id":1,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    },
    {  
        "name":"Shokolaat",
        "cuisine":"American",
        "id":2,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    },
    {  
        "name":"Gordon Biersch",
        "cuisine":"American",
        "id":3,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    },
    {  
        "name":"Crepevine",
        "cuisine":"American",
        "id":4,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    },
    {  
        "name":"Creamery",
        "cuisine":"American",
        "id":5,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    },
    {  
        "name":"Old Pro",
        "cuisine":"American",
        "id":6,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    },
    {  
        "name":"Nola\"s",
        "cuisine":"Cajun",
        "id":7,
        "address":"Pal gam",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png"
    }
]

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((res) => {
        res.name.includes(searchText)
    });
    return filterData;
}

export default function MediaCard() {
    const [restaurants, setRestaurants] = useState(restaurantDetails);
    const [searchText, setSearchText] = useState("")
    return (
        <>
            <div className="form-container p-4">
                <form className="d-flex mx-2" role="search">
                    <input className="form-control me-2" placeholder="Search" aria-label="Search" value={searchText} onChange={(e)=>{ setSearchText(e.target.value)}}/>
                    <button className="btn btn-success" onClick={()=>{
                        const data = filterData(searchText, restaurants);
                        setRestaurants(data);
                    }}>Search</button>
                </form>
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