import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Login from '../Buyer/Login';
import Products from '../Farmer/Products';
import DetailProduct from '../Buyer/DetailProduct'
import Register from '../Buyer/Register'
import Cart from '../Buyer/Cart';
import Error from '../Home/Error';
import MobilePayMain from '../MobilePay/MobilePayMain';
import MobilePayment from '../MobilePay/MobilePayment';
import OrderHistory from '../Payment/OrderHistory';
import OrderDetails from '../Payment/OrderDetails';
import Categories from '../Farmer/Categories';
import CreateProduct from '../Farmer/CreateProduct';
import About from '../Home/About';
import Contact from '../Home/Contact'


import {GlobalState} from '../../GlobalState'


function Pages() {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" exact component={Products} />
                <Route path="/detail/:id" exact component={DetailProduct} />
                <Route path="/login" exact component={isLogged ? Error : Login} />
                <Route path="/history" exact component={isLogged ? OrderHistory : Error } />
                <Route path="/history/:id" exact component={isLogged ? OrderDetails : Error } />
                <Route path="/register" exact component={Register} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/bill" exact component={MobilePayMain} />
                <Route path="/mbill" exact component={MobilePayment} /> 
                <Route path="/cart" exact component={Cart} />
                <Route path="/category" exact component={isAdmin ? Categories : Error} />
                <Route path="/create_product" exact component={isAdmin ? CreateProduct : Error} />
                <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : Error} />
                <Route path="*" exact component={Error} />
            </Switch>
        )
}

export default Pages;
