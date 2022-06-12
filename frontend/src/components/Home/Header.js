import React, { useState, useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios'

function Header() {

  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart

  const logoutUser = async () => {
    await axios.get('/user/logout')

    localStorage.removeItem('firstLogin')

    window.location.href = "/";
  }

  const adminRouter = () => {
    return (
      <>
        <li><Link class="btn btn-white" to="/create_product">Create Product</Link></li>
        <li><Link class="btn btn-white" to="/category">Categories</Link></li>
      </>
    )
  }

  const loggedRouter = () => {
    return (
      <>
        <li><Link className="btn btn-white ms-2 px-4" to="/history">History </Link></li>
        <li><Link className="btn btn-outline-success ms-2 px-4 rounded-pill" to="/" onClick={logoutUser}>Logout <i className="fa fa-sign-out me-2" /></Link></li>
      </>
    )
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/service">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link active " to="/product">
                  {isAdmin ? 'Products' : 'Shop' }
                </Link>
              </li>
            </ul>
            <Link class="nav-link active navbar-brand mx-auto fw-bolder fs-2" to="/">
              {isAdmin ? 'ADMIN' : 'Agri Product'}
            </Link>
            {isAdmin && adminRouter()}

            {
              isLogged ? loggedRouter() : <li><Link className ="btn btn-outline-success ms-2 px-4 rounded-pill" to="/login">Login <i className="fa fa-sign-in me-2"/> </Link></li>
            }

            <NavLink to="/register"> <button className="btn btn-outline-success ms-2 px-4 rounded-pill">
              Register <i className="fa fa-user-plus me-2" />
            </button> </NavLink>

            {
              isAdmin ? ''
                : <div className='cart-icon'>
                  <span>{cart.length}</span>
                  <NavLink to="/cart"> <button className="btn btn ms-2 px-4 rounded-pill">
                    <i className="fa fa-2x fa-cart-arrow-down me-2" />
                  </button> </NavLink>
                </div>

            }

          </div>
        </div>
      </nav>



    </div >

  )
}

export default Header;