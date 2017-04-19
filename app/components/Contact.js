import React, { PropTypes } from 'react';

const Contact = (props) => {
  return (
    <div id="contactContainer">
      <div id="contactHeader">
        <h1>Contact</h1>
        <p className='subheading' >Let's make things together!</p>
      </div>
      <div id="contactBody">
        <div className='half'>
          <a href="tel:+19738092503">
            <div id='iconBox'>
              <i className="fa fa-mobile left" aria-hidden="true"></i>
            </div>
            973.809.2503
          </a>
        </div>
        <div className='half'>
          <a href='mailto:ckirkinis@gmail.com'>
            <div id='iconBox'>
              <i className="fa fa-envelope right" aria-hidden="true"></i>
            </div>
              ckirkinis@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;

// <p>
//   <div className='iconCentered'>
//     <i className="fa fa-facebook-official" aria-hidden="true"></i>
//   </div>
//   <div className='text'></div>
// </p>
// <p>
//   <div className='iconCentered'>
//     <i className="fa fa-instagram" aria-hidden="true"></i>
//   </div>
//   <div className='text'></div>
// </p>


// <p>
//   <div className='iconCentered'>
//     <i className="fa fa-mobile" aria-hidden="true"></i>
//   </div>
//   <div className='text'>
//     <a href="tel:+19738092503">973.809.2503</a>
//   </div>
// </p>
// <p>
//   <div className='iconCentered'>
//     <i className="fa fa-paper-plane" aria-hidden="true"></i>
//   </div>
//   <div className='text'>
//     <a href='mailto:ckirkinis@gmail.com'>
//       ckirkinis@gmail.com
//     </a>
//   </div>
// </p>
