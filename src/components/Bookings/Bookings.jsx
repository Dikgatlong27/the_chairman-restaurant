import React from 'react';
import { TablesMap, SubHeading } from '../../components'
import { useForm, ValidationError } from '@formspree/react';

import './Bookings.css';

const Bookings = () => {
  const [state, handleSubmit] = useForm("mvoerrol");
    if (state.succeeded){
        return (
            <p className='section__padding p__opensans'>Thank you for choosing us. We await your visit eagerly!</p>
        );
    }

  return (
    <div className='app__bookings section__padding'>


      <SubHeading title={'Reserve a Table'} />



      <form onSubmit={handleSubmit} className="reservation-form app__wrapper">

        <div id='bookings__form'>
          <div className="form-group">
              <label htmlFor="email" className="form-label p__opensans">Email Address</label>
              <input id="email" type="email" name="email" placeholder="Your email here..." className="form-input" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
              <label htmlFor="phone" className="form-label p__opensans">Phone</label>
              <input id="phone" type="phone" name="phone" placeholder="Your phone number here..." className="form-input" />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>
          <div className="form-group">
              <label htmlFor="message" className="form-label p__opensans">Message</label>
              <textarea id="message" name="message" rows={4} className="form-textarea"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <div className='form-group'>
              <label>Select Date</label>
              <input id='date' type='date' name='date' className='form-input' />
          </div>
          <div className='form-group'>
              <label>Select Time</label>
              <input id='time' type='time' name='time' className='form-input' />
          </div>
        </div>

        <div className=''>
          <TablesMap />
          <button type="submit" disabled={state.submitting} className="custom__button">Reserve</button>
        </div>
        
      </form>




    </div>
  )
}

export default Bookings
