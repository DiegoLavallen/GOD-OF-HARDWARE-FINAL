import React from 'react';
import logo from '../Assets/logoKratos.png'
import './NavBar.css';



export default function NavBar(){
  return (
    <header>
      <a href="#"><img src={logo} alt="" /></a>

      <nav>
        <ul className='nav_links'>
          <li><a href='producto.jsx'>PRODUCTOS</a></li>
          <li><a href="#">PC ARMADAS</a></li>
          <li><a href="#">NOTEBOOKS</a></li>
          <li><a href="#">AYUDA</a></li>
        </ul>


      </nav>
      <a className='cta' href="#"><button>CONTACTO</button></a>
    </header>

  )


}