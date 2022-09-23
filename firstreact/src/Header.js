import React from 'react';
import ReactDOM from 'react-dom/client';
import Clance from './Img/clance-logo.png'


function Header(){
  return(
  <nav>
    <img src ={Clance} alt="logo" className='logo' />
    <h3>Clance </h3>
  </nav>
  )
}

export default Header;