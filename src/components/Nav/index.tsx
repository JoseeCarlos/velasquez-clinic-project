import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';
export const Nav = () => {

    return (
        <div>
            <header className='navbar-header'>
                <div className='navbar-image'></div>
                <nav>
                    <ul className='navbar-ul'>
                        <li className='navbar-li'><a href="#" className='navbar-a'>Inicio</a></li>
                        <li className='navbar-li'><a href="" className='navbar-a'>Sobre Nosotros</a></li>
                        <li className='navbar-li'><a href="" className='navbar-a'>Especialidades</a></li>
                        <li className='navbar-li'><a href="" className='navbar-a'>Testimonios</a></li>
                        <li className='navbar-li'><a href="" className='navbar-a'>Contacto</a></li>
                        <li className='navbar-li'><button className='navbar-button'>Inicia Sesion</button></li>
                    </ul>
                </nav>
            </header>
        </div>
      
    )
}
