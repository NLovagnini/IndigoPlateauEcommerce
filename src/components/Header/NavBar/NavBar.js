import './NavBar.css';
import React from 'react';
import {Link} from 'react-router-dom'



const NavBar = ({categories}) => {
    return (       
        <div className='navBar'>
            <ul className='navBarList'>
                <Link className='navLink' to={`/ItemList`}>
                    <li className='navComponent'><span>ALL</span></li>
                </Link>
                {categories.map((c) => (
                <Link className='navLink' key={c.id} to={`/ItemList/${c.id}`}>
                    <li  className='navComponent'><span>{(c.id).toUpperCase()}</span></li>
                </Link>
                ))}
            </ul>
        </div>

    )
}

export default NavBar
