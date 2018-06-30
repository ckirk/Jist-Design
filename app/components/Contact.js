import React, { PropTypes } from 'react';

const Contact = (props) => {
  return (
    <div id="contactContainer">
      <div id="contactHeader">
        <h1>Let's make things <br/>together</h1>
        {/* <p className='subheading' >Let's make things <br/>together</p> */}
      </div>
      <div id="contactBody">
        <div className='half'>
          <a href='mailto:info@jistdesign.com'>
            <div id='iconBox'>
              <i className="fas fa-envelope right" aria-hidden="true"></i>
            </div>
              info@jistdesign.com
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
