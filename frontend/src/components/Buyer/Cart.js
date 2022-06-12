import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PayPalButton from '../Payment/PayPalButton';

function Cart() {
  const state = useContext(GlobalState)
  const [cart, setCart] = state.userAPI.cart
  const [token] = state.token
  //const [callback, setCallback] = state.userAPI.callback
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      }, 0)

      setTotal(total)
    }

    getTotal()

  }, [cart])

  const addToCart = async (cart) =>{
    await axios.patch('/user/addcart', {cart}, {
        headers: {Authorization: token}
    })
}

  const increment = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.quantity += 1
      }
    })

    setCart([...cart])
    addToCart(cart)
  }

  const decrement = (id) => {
    cart.forEach(item => {
      if (item._id === id) {
        item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
      }
    })

    setCart([...cart])
    addToCart(cart)
  }

  const removeProduct = id =>{
    if(window.confirm("Do you want to delete this product?")){
        cart.forEach((item, index) => {
            if(item._id === id){
                cart.splice(index, 1)
            }
        })

        setCart([...cart])
        addToCart(cart)
    }
}

  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post('/api/payment', { cart, paymentID, address }, {
      headers: { Authorization: token }
    })

    setCart([])
    addToCart([])
    alert("You have successfully Placed an Order.");
    
  }

  if (cart.length === 0)
    return <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Your Cart is Empty</h2>

  return (
    <div>
      {
        cart.map(product => (
          
          <div className="detail cart" key={product._id}>
            <img className='cart_imgs' src={product.images.url} alt="" />

            <div className="box-detail">
              
              <h2>{product.title}</h2>

              <h3>$ {product.price * product.quantity}</h3>
              <p className='cart_con'>{product.content}</p>
              <p className='cart_desc'>{product.description}</p>
              

  

              <div className="amount">
                <button onClick={() => decrement(product._id)}> - </button>
                <span>{product.quantity}</span>
                <button onClick={() => increment(product._id)}> + </button>
              </div>

              <Link to="/cart" className='btn btn-success btn-lg'>Buy Now</Link>

              <div className="delete"
                onClick={() => removeProduct(product._id)}>
                X
              </div>
            </div>
          </div>
        ))
      } <br/> <br/> <br/> 
      <div className="total">
        <h1>Total Price: $ {total}</h1>
        <PayPalButton className="paypal"
        total = {total}
        tranSuccess={tranSuccess}/>
      </div> <br/> <br/> <br/> 

      <div className="total">
        <h1>Mobile Pay: $ {total}</h1>
        {/* <a href=''><button>Pay From Mobile</button></a> */}
        <Link to="/mbill" className='btn btn-success btn-lg'>Pay From Mobile</Link>
      </div> <br/> <br/> <br/> 
    </div> 
  ) 
}

export default Cart