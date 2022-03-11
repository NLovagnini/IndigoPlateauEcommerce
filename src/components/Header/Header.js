import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import NameLogo from './NameLogo/NameLogo'
import NavBar from './NavBar/NavBar'
import SearchBar from './SearchBar/SearchBar'
import './Header.css'
import {Link} from 'react-router-dom'
import { useEffect, useState} from 'react'
import categoriesData from '../categories'

const Header = () => {

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const getCategories = new Promise((resolve) =>{
            resolve(categoriesData);
    })
    getCategories.then((resolve) => {setCategories(resolve);}) 
  }, [])


  return (
    <div className="header">
      <div className="overNav row">
        <Link className='nameLogo' to="/"> <NameLogo /> </Link>
        <SearchBar></SearchBar>
        <CartWidget></CartWidget>
      </div>
      <NavBar categories={categories}></NavBar>
    </div>
  )
}

export default Header
