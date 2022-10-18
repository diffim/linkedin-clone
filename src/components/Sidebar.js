import { Avatar } from '@mui/material'
import React from 'react'
import './css-files/Sidebar.css'


function Sidebar({avatar}) {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://c4.wallpaperflare.com/wallpaper/538/889/69/tsutomu-nihei-blame-wallpaper-preview.jpg" alt=""/>
            <Avatar className="sidebar__avatar" src={avatar} />
            <h2>kdiffin</h2>
            <h4>oofchad@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,321</p>
            </div>
           
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,531</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('frontend')}
            {recentItem('design')}
            {recentItem('developer')}
            
        </div>
    </div>
  )
}

export default Sidebar