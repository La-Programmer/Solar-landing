import React from 'react'
import { Link } from 'react-router-dom'
import './Homecard.css'

function Homecard({icon, title, about, icon2, title2, about2}) {
  return (
    <div className='homecard'>

       <div className='card__top'>
            
            <Link to='/services'>
              {icon}
            </Link>

            <h1>
                {title}
            </h1>

            <p>
            {about}
            </p>
       </div>

       <div className="card__bottom">
            <Link to='/services'>
              {icon2}
            </Link>

            <h1>
                {title2}
            </h1>

            <p>
            {about2}
            </p>
       </div>

    </div>
  )
}

export default Homecard