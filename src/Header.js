import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {

    const style = {
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        display: 'flex',
        position: 'sticky',
        top: '0',
        color: 'grey',
        alignItems: 'center',
        borderBottom: '1px solid grey',
        overflow: 'hidden'
        }

    
  return (
    <div className='header' style={style}>
        <div className='nav__bar'>
            <NavLink to='/' >
                <span className="path">Home</span>
            </NavLink>

            <NavLink to='/about'>
                <span className='path'>About</span>
            </NavLink>

            <NavLink to='/services' >
                <span className="path">Services</span>
            </NavLink>

            <NavLink to='/contact' className='path'>
                <span className='path'>Contact</span>
            </NavLink>
        </div>

        <div className="right">
            <h3>YOU CAN FIND US HERE</h3>
            <p>Folorunsho Street, off Ajayi Rd, Mechanic bus stop, Ogba, Ikeja, Lagos State.</p>
        </div>
    </div>
  )
}

export default Header