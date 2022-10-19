import React, { useState } from 'react';
import './Contact.css';
import { send } from 'emailjs-com';
import { animated, useTransition} from 'react-spring'
import { Link } from 'react-router-dom'
import config from 'feather/config';

function Contact() {
    const [show, set] = useState(false);

    const [click, setClick] = useState(false);
    
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    })

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    }

    
    const transitions = useTransition(show, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        reverse: show,
        delay: 500,
        config: config.molasses
    })

    

    const submit = (e) => {
        e.preventDefault();
        send(
            'default_service',
            'template_pyava6r',
            toSend,
            'b_tLwSQjpah0W1rdb'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            set(!show);
            setClick(!click)
        }).catch((error) => {
            console.log('FAILED...', error);
        });
    }


  return (
    <div className='contact'>
        <Link to='/'>
            <img src={require('./images/logo.jpeg')} className='logo' alt=''/>
        </Link>
        <form className='contact__form' onSubmit={submit}>
        <h2>CONTACT US</h2>
            <input type='text' name='from_name' value={toSend.from_name} placeholder='Your name' onChange={handleChange} required/>
            <input type='email' name='reply_to' value={toSend.reply_to} placeholder='Your email' onChange={handleChange} required/>
            <input type='text' name='message' value={toSend.message} placeholder='Your message' onChange={handleChange} required/>
            <button className='submitButton' value='submit' disabled={click}>
                Submit
            </button>
        </form>
        {transitions(
            (styles, item) => item && <animated.div style={styles}>
                <h2>MESSAGE DELIVERED</h2>
                <img src={require('./images/sender-animate.png')} alt='' className='contact__image'/>
            </animated.div>
        )}
    </div>
  )
}

export default Contact