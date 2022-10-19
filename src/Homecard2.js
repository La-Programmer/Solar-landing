import React from 'react';
import './Homecard2.css';

function Homecard2({image, title, about}) {
  return (
    <div className='homecard2'>
        <img src={image} alt=''/>
        <div className="about__section">
            <h1>
                {title}
            </h1>

            <p>
                {about}
            </p>
        </div>
    </div>
  )
}

export default Homecard2