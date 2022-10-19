import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { AiOutlineMail} from 'react-icons/ai';
import { FaPhoneAlt} from 'react-icons/fa';
import { IoLogoYahoo } from 'react-icons/io';
import { NavLink, Link } from 'react-router-dom';
import { BiArrowToTop } from 'react-icons/bi';

function Footer() {
  return (
    <div className='footer'>
        <div className="section links">
            <h1>
                QUICK LINKS
            </h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>
        </div>

        <div className="section footer__contact">
            <h1>
                CONTACT US
            </h1>
            <div className="sm__links">
                <a href='https://www.facebook.com/profile.php?id=100064073353761'><FaFacebookF/></a>
                <a href='https://www.linkedin.com/in/lanrewaju-global-electrical-services-a3500424b/'><ImLinkedin2/></a>
                <a href='lanrewajuglobalelectricityservice@yahoo.com'><IoLogoYahoo/></a>
                <Link to='/contact'>
                    <AiOutlineMail/>
                </Link>
            </div>
        </div>
       <div className="bottom__section footer__phone">
            <FaPhoneAlt/> 
            &nbsp;
            &nbsp;
            <p>
            +234 8024007053
            +234 8093132137
            </p>
       </div>
        <a href='#top' className='to__the__top'><BiArrowToTop/></a>
    </div>
  )
}

export default Footer