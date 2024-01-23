import React from 'react'
import RestaurantContainer from './RestaurantContainer'
import useOnline from '../Utils/useOnline'

const Body = () => {

  const isOnline = useOnline();

  if(!isOnline) return <h1>🔴You are offline!! Please Check the internet!</h1>

  return (
    <>
        <RestaurantContainer/>
    </>
  )
}

export default Body
