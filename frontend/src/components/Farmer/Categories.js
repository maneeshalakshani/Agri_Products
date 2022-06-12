import React, { useState, useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import axios from 'axios'

function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e => {
        e.preventDefault()
        try {
            if(onEdit) {
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            } else {
                const res = await axios.post('/api/category', {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id =>{
        try {
            const res = await axios.delete(`/api/category/${id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className='container'> <br/>
            <div className="categories_edit form-control">
            <form onSubmit={createCategory}>
                <label className="lbl_cat" htmlFor="Category" >Category</label>
                <input className='form-control crt_cat' type="text" placeholder='Enter Category Name' name="category" value={category} required
                onChange={e => setCategory(e.target.value)} />

                <button className="btn btn-success cat_btn" type="submit">{onEdit? "Update" : "Create"}</button>
            </form> <br/> 

            <div className="">
                {
                    categories.map(category => (
                        <div className="cat_name" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button className='btn btn-warning edit_btn' onClick={() => editCategory(category._id, category.name)}>Edit</button>
                                <button className='btn btn-danger dlt_btn' onClick={() => deleteCategory(category._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Categories;
