import React from 'react';
import Header from "./components/Header"
import Sidebar from './components/Sidebar';

import './App.css';
import Feed from './components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login /> 
          ) : (
        <div className="app__body">
          <Sidebar avatar="https://wallpapers-all.com/uploads/posts/2017-02/7_blame!.jpg"/>
          <Feed />
        </div> 
        )}
    </div>
  );
}

export default App;
