import React from 'react'
import { singleProduct } from '../../data'
import Single from '../../components/single/Single'

const Product = () => {
  return (
    <div className='product'>
        <Single {...singleProduct}/>

    </div>
  )
}

export default Product
