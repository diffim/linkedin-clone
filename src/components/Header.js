import React from 'react'
import './css-files/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home"
import SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import { auth } from '../firebase';
function Header() {
  
  return (
    <div className='header'>
        <div className='header__left'>
            <img 
              src="https://www.renlearn.co.uk/wp-content/uploads/2020/04/LinkedIn-Logo.png" 
              alt="" />
                
            <div className="header__search">            
                <SearchIcon/>  <input type="text" placeholder='search' />
            </div>

        </div>

        <div className='header__right'>
          <HeaderOption title='Home' Icon={HomeIcon}/>
          <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
          <HeaderOption title='Chat' Icon={Chat}/>
          <HeaderOption title='Jobs' Icon={BusinessCenter}/>
          <HeaderOption title='Notifications' Icon={Notifications}/>
          <HeaderOption title="me" avatar="https://wallpapers-all.com/uploads/posts/2017-02/7_blame!.jpg"/>
            
        </div>

    </div>
  )
}

export default Header