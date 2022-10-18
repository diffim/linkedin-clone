import {  CalendarViewDayOutlined, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useState} from "react"
import { db } from '../firebase'
import "./css-files/Feed.css"
import InputOption from './InputOption'
import Posts from './Posts'
import firebase from "firebase/compat/app"
function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])


    const sendPost = e => {
        e.preventDefault()

        db.collection('posts').add({
            name:   "Kdiffin",
            description: "dis a test",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })

        setInput("")
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => 
            setPosts(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))

            )
        )
    },[])

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}  type="text" placeholder='Submit a post' />
                    <button onClick={sendPost}type="submit">send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption title="Photo" Icon={Image} color="#70B5F9" className={"feed__inputOption"}/>
                <InputOption title="Subscriptions" Icon={Subscriptions} color="#E7A33E" className={"feed__inputOption"}/>
                <InputOption title="Events" Icon={EventNote} color="#C0CBCD" className={"feed__inputOption"}/>
                <InputOption title="Schedule" Icon={CalendarViewDayOutlined} color="#7FC15E" className={"feed__inputOption"}/>


            </div>
        </div>

       
        {posts.map(({id,data: {name,description,message,photoUrl}}) => (
            <Posts 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            
            />
        ))}
        
       
    </div>
  )
}

export default Feed