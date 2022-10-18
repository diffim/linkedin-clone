import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from "../firebase"
import "./css-files/Login.css"
import {login } from "../features/userSlice"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] =useState('')
  const dispatch = useDispatch();

   
    const register = () => {
        if (!name) {
          return alert('please enter a full name!')
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
          userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,

          })
          .then(() => {
              dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
              }))
          })
        }) .catch(error => alert(error))
    }

  return (
    <div className="login">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
         alt="" />

         <form>
            <input 
              value={name} 
              onChange={e => setName(e.target.value)} 
              type="text" 
              placeholder="Full name (required if registering)"/>


            <input 
              value={profilePic} 
              onChange={e => setProfilePic(e.target.value)} 
              placeholder="Profile pic Url(optional)" 
              type="text" />

            <input 
              type="email"
              placeholder='Email' 
              value={email} 
              onChange={e => setEmail(e.target.value)}  />
            
            <input 
              type="password" 
              placeholder='Password'  
              value={password} 
              onChange={e => setPassword(e.target.value)}/>
            <button type="submit" >Sign In</button>
         </form>

         <p>Not a member? 
            <span className='login__register' onClick={register}> Register Now</span>
         </p>

    </div>
    
  )
}

export default Login