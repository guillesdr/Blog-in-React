import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Layout = (props) => {
    return (
        <>
            <div className='navbar'>
                <nav className='navbar__nav'>
                    <div className='navbar__nav--container'>
                        <h3> Programatologa escribe </h3>
                    </div>
                    <div className='navbar__nav--container-double'>
                        <Link className='navbar__nav--container-double-link' to='/sobre-mi'> Sobre mí </Link>
                        <Link className='navbar__nav--container-double-link' to='/contacto'> Contacto </Link>
                    </div>
                    <div className='navbar__nav--container-login'>
                        <Link className='navbar__nav--container-link-button' to='/login'> Iniciar sesión </Link>
                    </div>
                </nav>
                { props.children }
            </div>
        </>
    )
};

export default Layout;