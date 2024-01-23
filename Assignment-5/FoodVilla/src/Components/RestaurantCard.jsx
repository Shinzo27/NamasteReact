import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const RestaurantCard = (props) => {
  return (
    <div>
        <div className="card" style={{width: '18rem', margin:"20px"}}>
            <center>
                <img src={props.image} style={{height:"250px", width:"250px", paddingTop:"10px"}} className="card-img-top" alt="..."/>
            </center>
            <div className="card-body">
                <h5 className="card-title" style={{fontWeight:"700"}}>{props.title}</h5>
                <p className="card-text">{props.price} $</p>
                <button to="/" className="btn btn-primary">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard
