import React from 'react';
import './Footer.scss'
import { useEffect, useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import { SocialMedia } from '../../components';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [isFormSubmitted,setIsFormSubmitted] = useState(false);
    const [loading,setLoading] = useState(false);

    const {name, email, message} = formData;

    const handleChangeInput = (e) => {
        const {name, value} = e.target;


        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = () => {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message
      }

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
    }

    return (
        <>
          <h2 className='head-text'>
            Lets Grab A <span>Tea</span> and <span>Chat</span>
          </h2>  
          <div className='app__footer-cards'>
            <div className='app__footer-card'>
              <img src={images.mail} alt='email' />
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=kautilya101001@gmail.com' className='p-text '>kautilya101001@gmail.com</a>
            </div>
          </div>
          {!isFormSubmitted ?
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
                <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
            </div>
            <div className='app__flex'>
                <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
            </div>
            <div className='app__flex'>
                <textarea className='p-text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput}/>
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' :'Send Greetings'}</button>
          </div> 
          : <div>
            <h3 className='head-text'> Thank You for getting in touch.</h3>
          </div>
          }
          <SocialMedia styleClass={'app__social-min'}/>
        </>
    );
}

export default AppWrap(MotionWrap(Footer,'app__footer'),'contact','app__primarybg');
