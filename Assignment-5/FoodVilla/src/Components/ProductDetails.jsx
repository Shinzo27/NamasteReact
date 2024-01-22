import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(()=>{
        getProductInfo();
    }, []);

    async function getProductInfo() {
        const data = await fetch(
            'https://fakestoreapi.com/products/' + id
        );

        const json = await data.json();
        console.log(json);
        setProduct(json);
    }

  return !product ? <Shimmer/> : (
    <div>
      <h1>ID : { product.id }</h1>
      <h1>Product Name : {product.title}</h1>
      <img src={product.image} height={"300px"} width={"300px"} alt="" />
      <br/>
      <br/>
      <h1> {product.price} $</h1>
    </div>
  )
}

export default ProductDetails
