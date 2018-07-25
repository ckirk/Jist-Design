import React from 'react';

const Contact = (props) => {
  return (
    <div className='centeredContainer'>
      <div id="contact" className='centered'>
        {/* <h1><span className='highlight'>Let's make things <br/> together :)</span></h1> */}
        <h1><span>Let's make things</span></h1>
        <h1><span>together :)</span></h1>
        <div className="button">
          <a href='mailto:info@jistdesign.com'>
            {/* <i className="fas fa-fw fa-envelope right" aria-hidden="true"></i>&nbsp; */}
            Contact Us
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
