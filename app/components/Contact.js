import React, { PropTypes } from 'react';

const Contact = (props) => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Get in touch.</p>
      <div id="contactBody">
        <p>
          <div className='iconCentered'>
            <i className="fa fa-mobile" aria-hidden="true"></i>
          </div>
          <div className='text'>
            <a href="tel:+19738092503">973.809.2503</a>
          </div>
        </p>
        <p>
          <div className='iconCentered'>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
          <div className='text'>
            <a href='mailto:ckirkinis@gmail.com'>
              ckirkinis@gmail.com
            </a>
          </div>
        </p>
        <p>
          <div className='iconCentered'>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </div>
          <div className='text'></div>
        </p>
        <p>
          <div className='iconCentered'>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div className='text'></div>
        </p>
      </div>
    </div>
  )
}

export default Contact;
