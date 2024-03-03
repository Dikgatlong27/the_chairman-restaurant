import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './ContactForm.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xoqgwrbe');
  if (state.succeeded) {
    return <p className='section__padding p__opensans app__bg' style={{color: '#ccc'}}>Thank you for your enquiry, we have received your message and will get back to you ASAP.</p>;
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='app__contactUs-contact_form'>
              <div>
                <label htmlFor="name" className="form-label p__opensans">Name</label>
                <input id="name" type="text" name="name" placeholder="Your Name here..." className="custom__input" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="form-label p__opensans">Email Address</label>
                <input id="email" type="email" name="email" placeholder="Your email here..." className="custom__input" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="phone" className="form-label p__opensans">Phone</label>
                <input id="phone" type="phone" name="phone" placeholder="Your phone number here..." className="custom__input" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="form-label p__opensans">Message</label>
                <textarea id="message" name="message" rows={4} placeholder='your message here...' className="custom__input" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type='submit' className='btn' disabled={state.submitting}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm
