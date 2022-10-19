import React from 'react'
import './Product.css'
import useMediaQuery from 'use-mediaquery'
import { Link } from 'react-router-dom';

function Product({title, image, about, bg}) {
 
  const style = {};
  const style1 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '',
    color:'',
    backgroundImage: ''
  }

  const style2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const matches = useMediaQuery('(max-width: 768px)')

  if (matches === true) {
    for (const item in style2) {
      style[item] = style2[item];
    }
    if (bg === 'grey') {
      style.backgroundColor = 'rgb(211, 211, 211, 0.7)' 
    } else {
      style.backgroundColor = 'rgb(255, 255, 255)'
    }
  } else {
    for (const item in style1) {
      style[item] = style1[item];
    }
    if (bg === 'grey') {
      style.backgroundColor = 'rgb(211, 211, 211, 0.7)'
      style.flexDirection = 'row-reverse' 
    } else {
      style.backgroundColor = 'rgb(255, 255, 255)'
    }
  }

  return (
    <div className='product' style={style}>
        <div className='product__info'>
            <h2>{title}</h2>
            <p>{about}</p>

          <Link to='/contact'>
            <button>
              CONTACT US
            </button>
          </Link>
        </div>
            <img src={image} className='product__image' alt=''/>
    </div>
  )
}

export default Product