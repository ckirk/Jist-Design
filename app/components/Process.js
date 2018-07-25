import React from 'react';

const Process = (props) => {
  return (
    <div id='process'>
      <div className="stepsContainer">

        <div className="step">
          <div className='icon'>
            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
          </div>
          <h2>Idea</h2>
          <div className="details">
            <p>We specialize in converting ideas into beautiful, functional products. We'll work with you to mold your idea into something that is both practical with today's technology and fits your budget.</p>
          </div>
        </div>

        <div className="step">
          <div className='icon'>
            <i className="fa fa-flask" aria-hidden="true"></i>
          </div>
          <h2>Research</h2>
          <div className="details">
            <p>What unique challenges does your project bring to the table? We'll use both design and engineering to find elegant solutions to optimize your user experience.</p>
          </div>
        </div>

        <div className="step">
          <div className='icon'>
            <i className="fa fa-laptop" aria-hidden="true"></i>
          </div>
          <h2>Design</h2>
          <div className="details">
            <p>We start with hand-drawn sketches in order to rapidly iterate on ideas. As the design matures, we move to 2D digital mockups, then finally to 3D modeling.</p>
          </div>
        </div>

        <div className="step">
          <div className='icon'>
            <i className="fa fa-cube" aria-hidden="true"></i>
          </div>
          <h2>Prototype</h2>
          <div className="details">
            <p>Once we've established a winning design, we'll begin manuacturing a physical prototype using cutting-edge rapid manufacturing techniques such as 3D printing, lazer cutting, and CNC.</p>
          </div>
        </div>

        <div className="step">
          <div className='icon'>
            <i className="fa fa-wrench" aria-hidden="true"></i>
          </div>
          <h2>Testing</h2>
          <div className="details">
            <p>A lot can be learned from a physical prototype. Does it look and behave as expected? What do potential customers and investors think? What needs to be changed? What can be improved?</p>
          </div>
        </div>

        <div className="step">
          <div className='icon'>
            <i className="fa fa-cubes" aria-hidden="true"></i>
          </div>
          <h2>Manufacturing</h2>
          <div className="details">
            <p>Is your product ready for the wild? We'll optimize your design for efficent, cost-effective manufacturing at scale.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Process;
