import React from 'react';
import { SubHeading } from '../../components';
import { useForm, ValidationError } from '@formspree/react';

import './Newsletter.css';

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xbjnypwy");
  if (state.succeeded) {
      return <p className='section__padding p__opensans' style={{color: '#ccc'}}>Thanks for Subscribing!</p>;
  }
  
  return (
    <div className='app__newsletter section__padding'>


      <SubHeading title='Subscribe' />

      <p className="p__opensans" style={{color: '#bbb', marginBottom: '2rem'}}>Subscribe to our newsletter for specials, events, and more delights.</p>
      
      <form id='subscription-form' onSubmit={handleSubmit}>        
        <input id="email" type="email" name="email" placeholder="Your email here..."  className="custom__input" />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      
        <button type="submit" className="custom__button">Send</button>
      </form>

    </div>
)};

export default Newsletter;
