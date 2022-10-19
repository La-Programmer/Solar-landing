import { send } from 'emailjs-com';
import React, { useState } from 'react'
import './Homecf.css';

function Homecf() {

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

    const submit = (e) => {
        e.preventDefault();
        send(
            'default_service',
            'template_pyava6r',
            toSend,
            'b_tLwSQjpah0W1rdb'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setClick(!click);
        }).catch((error) => {
            console.log('FAILED...', error);
        });
    }


  return (
    <div className='homecf'>
        <form className='contact__form' onSubmit={submit}>
        <h2>CONTACT US</h2>
            <input type='text' name='from_name' value={toSend.from_name} placeholder='Your name' onChange={handleChange} required/>
            <input type='email' name='reply_to' value={toSend.reply_to} placeholder='Your email' onChange={handleChange} required/>
            <input type='text' name='message' value={toSend.message} placeholder='Your message' onChange={handleChange} required/>
            <button className='submitButton' value='submit' disabled={click}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Homecf