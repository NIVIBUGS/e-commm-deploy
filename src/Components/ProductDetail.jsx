import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
const ProductDetail = ({cart,setCart}) => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [realtedProducts, setRealtedProducts] = useState([])
  useEffect(() => {
   const filterProduct = items.filter((product)=>  product.id==id)
    // console.log(filterProduct)
    setProduct(filterProduct[0])

    const realtedProducts = items.filter((p) => p.category === product.category)
    // console.log(realtedProducts)
    setRealtedProducts(realtedProducts)
   }, [id,product.category])
  
  return (
    <>
    <div className='container con'>
      <div className="imgg">
        <img src={product.imgSrc} alt=''/>
       {/* imgg */}
      </div>
      <div className="text-center">
      <h1 className="card-title">{product.title}</h1>
       <p className="card-text">{product.description}</p>
       <button className='btn btn-primary mx-3'>{"₹"}&nbsp;{product.price}</button>
       <button className='btn btn-warning'>Add to cart</button>
       {/* text */}
      </div>
      {/* container */}
    </div>
    <h1 className='text-center'>Related Products</h1>
    <Product cart={cart} setCart={setCart} items={realtedProducts}/>
    </>
  )
}

export default ProductDetail