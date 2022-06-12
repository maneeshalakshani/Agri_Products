import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className='container filter py-5'>
            <div className="row_cat">
                <span>Filters: </span>
                <select name="category" className='form-control' value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" className='search form-control' value={search} placeholder="Enter your search!"
                onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row_sorts">
                <span>Sort By: </span>
                <select className='form-control select_filter'  value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
        
    )
}

export default Filters