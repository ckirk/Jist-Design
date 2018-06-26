import React, { PropTypes } from 'react';

const Process = (props) => {
  return (
    <div id='process'>

      <div className='icon'>
        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
      </div>
      <h2>Idea</h2>
      <div className='details'>
        <ul>
          <li>We specialize in converting ideas into functional, beautiful products.</li>
          <li>They don't need to be fully developed and it's okay if they're a little crazy.</li>
          <li>We can work with you to mold your idea into something that is both possible with today's technology and fits your budget.</li>
        </ul>
      </div>

      <div className='icon'>
        <i className="fa fa-flask" aria-hidden="true"></i>
      </div>
        <h2>Research</h2>
      <div className='details'>
        <ul>
          <li>What materials can we use? How will they affect performance?</li>
          <li>How can we design the product to be as small as possible?</li>
          <li>What electrical components need to be integrated?</li>
        </ul>
      </div>

      <div className='icon'>
        <i className="fa fa-laptop" aria-hidden="true"></i>
      </div>
        <h2>Design</h2>
      <div className='details'>
        <ul>
          <li>Generally we start with rough hand-drawn sketches in order to rapidly iterate while ensuring we're on the same page</li>
          <li>As the design matures we move to 2D computer visuializations</li>
          <li>After that theres one more thing we do</li>
        </ul>
      </div>

      <div className='icon'>
        <i className="fa fa-cube" aria-hidden="true"></i>
      </div>
        <h2>Prototype</h2>
      <div className='details'>
        <ul>
          <li>First we do this</li>
          <li>Then we look into that</li>
          <li>After that theres one more thing we do</li>
        </ul>
      </div>

      <div className='icon'>
        <i className="fa fa-wrench" aria-hidden="true"></i>
      </div>
        <h2>Testing</h2>
      <div className='details'>
        <ul>
          <li>First we do this</li>
          <li>Then we look into that</li>
          <li>After that theres one more thing we do</li>
        </ul>
      </div>

      <div className='icon'>
        <i className="fa fa-cubes" aria-hidden="true"></i>
      </div>
        <h2>Manufacturing</h2>
      <div className='details'>
        <ul>
          <li>First we do this</li>
          <li>Then we look into that</li>
          <li>After that theres one more thing we do</li>
        </ul>
      </div>





    </div>
  )
}

export default Process;
