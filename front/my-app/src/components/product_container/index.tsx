import { Iproducts_props } from '@/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'
import Product from '../product'

interface Icontainer_products {
          product:Iproducts_props[]
}
export const Product_Container: React.FC <Icontainer_products>=({product}) =>{
  return(
    <div className='grid grid-cols-2 gap-y-4'>{
          product && product.map((item)=>(
                    <div key={item.id}>
                              <Product {...item} />
                    </div>
          ))
          }
    </div>
  )
}
