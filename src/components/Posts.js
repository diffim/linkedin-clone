import { ChatOutlined, SendOutlined, ShareOutlined,  } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import React from 'react'
import "./css-files/Post.css"
import InputOption from './InputOption'
function Posts({name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpIcon} title=" Like"  className={"post__inputOption"} />
            <InputOption Icon={ShareOutlined} title=" Share"className={"post__inputOption"}/>
            <InputOption Icon={SendOutlined} title=" Send" className={"post__inputOption"}/>
            <InputOption Icon={ChatOutlined} title=" Comment" className={"post__inputOption"}/>

        </div>
    </div>
  )
}

export default Posts