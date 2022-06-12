import React, {createContext, useState, useEffect} from 'react'
import ProductsAPI from './components/Api/ProductsApi';
import UserAPI from './components/Api/UserAPI';
import CategoriesAPI from './components/Api/CategoriesAPI';
import axios from 'axios'

export const GlobalState = createContext() 

export const DataProvider =({children}) => {
    
    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        const token = await axios.get('/user/refresh_token');
        console.log(token);
    }

    //get users
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])

    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
} 

    
