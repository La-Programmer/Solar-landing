import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from 'use-mediaquery';
import './About.css';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function About() {
    const tops = [(<Header />), (<Sidebar />)];
    const matches = useMediaQuery('(max-width: 768px)');
    let top  
    if (matches === true) {
         top = tops[1];
    } else {
         top = tops[0];
    }
  return (
    <div className='about'>
        {top}
        <div className="about__header" id='top'>

            <Link to='/'>
              <img className='logo' src={require('./images/logo.jpeg')} alt=''/>
            </Link>

            <h1>WE EMPOWER YOU WITH POWER</h1>
        </div>
        <div className="about__info">
            <p className='about__info 1'>

                Lanrewaju Global Electrical Services is a company providing innovative approaches to electrical Services throughout the country providing a broad spectrum of world class electrical power solutions and services especially in the field of electrical distribution, transmission and generation both overhead and underground materials across the nation.
                
                <br/>
                <br/>

                We are focused on the development and creating illuminated and conducive living enabling environment for all organization and industries state above for reliable business growth across Nigeria with expected end results.

                <br/>
                <br/>

                Our contribution will be considerable effective and sustainable; always proffering solutions that extensively advance operational and financial performance of our clients while creating good reputation for all stakeholders.

                <br/>
                <br/>

                Our technicians take pride in their work and make sure it is done right the first time. We know the harmful effects of dirty air and work diligently to make your home and workplace comfortable and energy efficient.

                <br/>
                <br/>

                Our team are up-to-date with training and certifications. We are also well informed of changes and trends in the industry and can recommend the latest technology for your installations and will troubleshoot your problems in no time.

                <br/>
                <br/>

                Regardless the size of the job, our team will pay attention to the smallest of details in the utmost professionalism. We specialize in quality installations, and through proper maintenance, operating costs can be lowered and the life span of your equipment can be increased.

                <br/>
                <br/>

                The management team has the quality and professional experience to execute any Electrical Project,  please give us a call to schedule a free consultation.
                
            </p>
              
            <strong>WE LOOK FORWARD TO WORKING WITH YOU</strong>
        </div>

        <Footer id='footer'/>
    </div>
  )
}

export default About