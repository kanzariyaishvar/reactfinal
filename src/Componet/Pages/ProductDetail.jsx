import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3004/product/${id}`)
      .then((res) => {
        setProduct(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <Header />
      <div className="product-detail">
        <div className='product-detail-child'>
          <img src={product.img} alt={product.title} className="product-img" />
        </div>
        <div className='product-detail-child'>
          <h3 className="product-model">Movie Name: {product.name}</h3>
          <p className="product-title">Movie Title: {product.title}</p>
          <p className="product-price"> Movie Price: ${product.price}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail
