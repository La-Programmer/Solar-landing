import React from 'react';
import { FaFacebookF, FaSolarPanel, FaCity} from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { FaPhoneAlt} from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { MdGroups} from 'react-icons/md';
import { IoLogoYahoo } from 'react-icons/io'
import Header from './Header';
import './Home.css'
import Homecard from './Homecard';
import Homecf from './Homecf';
import Homecard2 from './Homecard2';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import useMediaQuery from 'use-mediaquery';
import Sidebar from './Sidebar';

function Home() {

    const electric = [<GiElectric className='icon'/>, <FaSolarPanel className='icon'/>, <FaCity className='icon'/>, <MdGroups className='icon'/>]

    const tops = [(<Header />), (<Sidebar />)];
    const matches = useMediaQuery('(max-width: 768px)');
    let top  
    if (matches === true) {
         top = tops[1];
    } else {
         top = tops[0];
    }

  return (
    <div className='home'>

        {top}

        <div className='home__top'>
            <img className='home__logo' src={require('./images/logo.jpeg')} alt=''/>

            <div className="left">
                <a href='https://www.facebook.com/profile.php?id=100064073353761'><FaFacebookF className='sm__icon'/></a>
                &nbsp;
                &nbsp;

                <a href='https://www.linkedin.com/in/lanrewaju-global-electrical-services-a3500424b/'><ImLinkedin2 className='sm__icon'/></a>

                &nbsp;
                &nbsp;

                <a href='lanrewajuglobalelectricityservice@yahoo.com'><IoLogoYahoo className='sm__icon'/></a>

                &nbsp;
                &nbsp;
                <div className="home__top__contact">
                    <FaPhoneAlt className='sm__icon'/>
                    <p>
                        +234 8024007053<br/>
                        +234 8093132137<br/>
                    </p>
            </div>
            </div>
        </div>
        

        <div className="home__header banner">
            <div className='home__header__content'>
                <h1>
                    LANREWAJU GLOBAL ELECTRICAL SERVICES
                </h1>


                <Link to='/contact'>
                    <button className='contact__button'>
                        CONTACT US
                    </button>
                </Link>
            </div>
        </div>

        <div className="home__row first">
            <h1>
                WHAT WE DO
            </h1>

            <div className="cards">
                <Homecard icon={electric[0]} title='General Electrical Installation' about='We at Lanrewaju Electrical Services offer premium electrical engineering services to our customers ranging from installation to maintenance'
                icon2={electric[1]} title2='Solar Energy Installation' about2='Our goal is to ensure that our customers are provided readily available power. We are ever ready to provide our customers with the solar energy option.'
                />

                <Homecard icon={electric[2]} title='Urban and Rural Electrification' about='We are capable of providing services to customers who require contractors to work on a project of any scale. Ranging from the rural to the Urban areas our team is capable of planning, design and execution to full scale.' icon2={electric[3]} title2='Consultation' about2='Lanrewaju Global Electrical Services offers consultation services to customers who require them. Our team of experts are always ready to help analyze a project from the conception of the idea down to pricing the product. Reach out to us to learn more.'/>

                <Homecf/>

            </div>
        </div>

        <div className="home__row second">
            <h1>
                OUR VISION
            </h1>
            <p>
                It is coventional to try and communicate our vision with words, but what better way than to show you.
            </p>

            <div className="cards">
                <Homecard2 image='https://media.istockphoto.com/photos/minneapolis-skyline-by-night-picture-id1065694240?b=1&k=20&m=1065694240&s=170667a&w=0&h=tUceqR_lyBeZgLXIJLvj2LkCc0Ur17v0JtiWRNvHp0c='
                title='CONSTANT POWER' about="On a fine night in the not so distant future, we want you to open your eyes and not see a single dark area on the horizon. We have resolved to provide constant quality power for everyone."
                />

                <Homecard2 image='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' title='INDIVIDUAL GROWTH' about='The improvement of our personnel is of great importance to us. We give our best everday to make the working environment of our technicians and engineers one that promotes and advances individual growth.'/>
            </div>
            
            <Link to='/contact'>
                <button className='home__row__button'>
                    CONTACT US
                </button>
            </Link>
        </div>

        <div className="home__bottom">
            <span>
                We are proud providers of all Electrical services and Innovative energy solutions. 
            </span>
            <div className="bottom__banner">
               <div className="bottom__banner__content">
                    <h2>
                        We look forward to working with you
                    </h2>

                    <Link to='/contact'>
                        <button className='contact__button__bottom'>
                            CONTACT US
                        </button>
                    </Link>
               </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home