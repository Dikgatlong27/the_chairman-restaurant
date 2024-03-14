import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TablesMap, SubHeading } from '../../components';

import './Bookings.css';

const Bookings = () => {
  const [state, handleSubmit] = useForm('mvoerrol');
  if (state.succeeded) {
    return <p className='section__padding p__opensans' style={{color: '#ccc'}}>Thank you for choosing The Chairman Fortaleza De Sol! We're thrilled to welcome you soon for an unforgettable dining experience!</p>;
  }

  return (
    <div className='app__bookings section__padding flex__center'>
      <SubHeading title={'Reserve a Table'} />
      <form onSubmit={handleSubmit} className="app__bookings-reservations app__wrapper section__padding">

        <div className='app__bookings-reservations_book .app__wrapper_info app__bg'>
          <div className="form-group">
            <label htmlFor="name" className="form-label p__opensans">Name</label>
            <input id="name" type="text" name="name" placeholder="Your Name here..." className="custom__input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label p__opensans">Email Address</label>
            <input id="email" type="email" name="email" placeholder="Your email here..." className="custom__input" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label p__opensans">Phone</label>
            <input id="phone" type="phone" name="phone" placeholder="Your phone number here..." className="custom__input" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label p__opensans">Message (Optional)</label>
            <textarea id="message" name="message" rows={4} placeholder='Special request, number of guests etc...' className="custom__input"></textarea>
          </div>

          <div className='form-group'>
            <label htmlFor="date" className="form-label p__opensans">Select Date</label>
            <input id='date' type='date' name='date' className='custom__input' required />
          </div>

          <div className='form-group'>
            <label htmlFor="time" className="form-label p__opensans">Select Time</label>
            <input id='time' type='time' name='time' className='custom__input' required />
          </div>
        </div>

        <div className='app__bookings-reservations_tablesMap app__bg'>
          <div className="form-group">
            <TablesMap />
            <button className="btn" type='submit' disabled={state.submitting}>Reserve</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default Bookings
