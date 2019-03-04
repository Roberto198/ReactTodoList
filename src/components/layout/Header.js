import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={cover}>
      <h1 style={header}>To - Do !</h1>
      <div  style={linkStyle}>
        <Link to ="/">Home</Link> | <Link to="/about">About</Link>
      </div>
    </header>
  )
}
let header ={
  //fontSize: '1.6rem',
  color: '#1f1a80',
  letterSpacing: '4px',
  textAlign: 'center',
  fontWeight: 'bolder',
  fontFamily: 'Alfa Slab One, cursive',
  padding: '25px 0px',
  fontSize: '75px',
  marginBottom: '15px'

}

let cover = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: 'rgba(58, 173, 250, 0.612)'
}
let linkStyle={
 textAlign: 'center',
 fontFamily: 'Alfa Slab One, cursive',
 color: '#1f1a80'
}

