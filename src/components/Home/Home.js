import React from 'react'
import HomeItems from '../HomeItems/HomeItems'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = ({ randomItems }) => {
  return (
    <div>
      <div>
        <Link to='/ItemList/search?search=brs'>
          <img className='homeBanner' alt="" src="/imgs/BRSBanner2.png" />
        </Link>
      </div>
      <HomeItems randomItems={randomItems} />
    </div>
  )
}

export default Home
