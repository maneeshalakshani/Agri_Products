import React from 'react';
import { Link } from 'react-router-dom'
import BtnRender from '../Farmer/BtnRender';
import axios from 'axios'

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {

  return (
    <section className='py-4 container'>
      <div className='row justidy-content-center'>
        <div className='col-12'>

          <div className='product_card'>
            {
              isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }

            <img src={product.images.url} alt="z" />

            <div className='product_box'>
              <h2 title={product.title}>{product.title}</h2>
              <span>${product.price}</span>
              <p>{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} />

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductItem;