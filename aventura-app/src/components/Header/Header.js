import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Avatar } from '@mui/material';


function Header
() {
  return (
    <div className='header'>
        <img className='header_icon' src={process.env.PUBLIC_URL +'/assets/aventura-logo2.png'} alt=''/>


        <div className='header_center'>
            <input type='text' />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Hosting {' '} with Aventura!</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>





    </div>
  )
}

export default Header