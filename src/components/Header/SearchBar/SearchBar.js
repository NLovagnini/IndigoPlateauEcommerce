import './SearchBar.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const SearchBar = () => {

    const navigate = useNavigate()

    const [searchInput, setSearchInput] = useState('')

    const handleParams = (e) =>{  
      e.preventDefault()  
      navigate(`/ItemList/search?search=${searchInput}`, {replace: true})     
      
    }

    const handleInput = (e) =>{
      setSearchInput(e.target.value)
    }


    return(
        
    <form className='searchBar' onSubmit={handleParams} >
        <input
            type="text"
            id="header-search"
            placeholder="Search any product"
            name="search" 
            className='searchInput'
            onChange={handleInput}
        />
        <button id='searchBtn' className='searchBtn'type="submit" >Search</button>
    </form>

);


}

export default SearchBar;