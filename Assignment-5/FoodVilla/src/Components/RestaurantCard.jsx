import React from 'react'
import '../App.css'

const RestaurantCard = (props) => {
  return (
    <div>
        <div className="card" style={{width: '18rem', margin:"20px"}}>
            <center>
                <img src={props.img} style={{height:"250px", width:"250px", paddingTop:"10px"}} className="card-img-top" alt="..."/>
            </center>
            <div className="card-body">
                <h5 className="card-title" style={{fontWeight:"700"}}>{props.name}</h5>
                <p className="card-text">{props.address}</p>
                <a href="#" className="btn btn-primary">Order Now</a>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard
