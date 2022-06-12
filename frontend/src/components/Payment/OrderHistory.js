import React, { useEffect , useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
    <div className='container'> <br/> <br/>
        <h2><center>History</center></h2> <br/>
        <h4>You have {history.length} Order </h4> <br/><br/>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Payment ID</th>
      <th scope="col">Date of Purchased</th>
    </tr>
  </thead>
  <tbody>
  {
                        history.map(items => (
                            <tr key={items._id}>
                                <th scope="row">1</th>
                                <td>{items.paymentID}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
                            </tr>
                        ))
                    }
    
    
  </tbody>
</table>
            
    </div>
  )
}

export default OrderHistory