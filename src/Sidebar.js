import React from 'react'
import './Sidebar.css'
import {  NavLink } from 'react-router-dom'
import { slide as Menu} from 'react-burger-menu'

function Sidebar() {
  return (
    <Menu>
            <NavLink to='/'>
              HOME
            </NavLink>
            <NavLink to='/about'>
                ABOUT
            </NavLink>
            <NavLink to='/services'>
                SERVICES
            </NavLink>
            <NavLink to='/contact'>
                CONTACT
            </NavLink>

            <br/>

            <h3>YOU CAN FIND US HERE</h3>
            <p>Folorunsho Street, off Ajayi Rd, Mechanic bus stop, Ogba, Ikeja, Lagos State.</p>
            <h3>Give us a call</h3>
            <p> 
                
                +234 8024007053
                <br/>
                +234 8093132137
            </p>
    </Menu>
  )
}

export default Sidebar