import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import styled from 'styled-components';

const StyledNav = styled.span`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  border: 2px solid;
  margin: 0px;
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;

  .link{
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    transition: color 0.3s ease, background-color .4s ease;
    transition: transform 0.3s ease; /* Apply transition to the transform property */
  }

  .link:hover{
    color: #000000;
    background-color: cyan;
    transform: translateX(10px);
  }
`

function App() {

  const logoutHandler = () => {
    localStorage.setItem('token', '')
    console.log("Logged out successfully")
  }

  return (
    <div className="App">
      <StyledNav >
        <h3>FRIENDS DATABASE</h3>
        <nav className='navbar'>
          <Link to="/" className='link'>LOGIN</Link>
          <Link to="/friendsList" className='link'>FRIENDSLIST</Link>
          <Link to="/addFriend" className='link'>ADDFRIEND</Link>
          <button className='link' onClick={logoutHandler} >LOGOUT</button>
        </nav>
      </StyledNav>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/friendsList" element={<FriendsList/>} />
          <Route path="/addFriend" element={<AddFriend/>} />
        </Routes>
    </div>
  );
}

export default App;
