import React, { PropTypes } from 'react';

// Image Imports
import SnagTagHero from '../images/snagtag_enclosure.png'
import SnagTagExplode from '../images/snagtag_enclosure3.png'

import SnagTagBoxHero from '../images/raspi_2up.png'

import RAVNgrip from '../images/GRIP-low.png'
import RAVNcam from '../images/CAM.png'
import StratHero from '../images/strat_angle.png'

import SnoMote from '../images/snomote_1.png'

const Projects = (props) => {
  return (
    <div id="projectsWrapper" style={{transform: `translateX(-${props.slidePosition}px)`}}>

      <Project title='SnagTag' heroImage={SnagTagHero}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In pellentesque massa placerat duis ultricies lacus sed. Ac tortor dignissim convallis aenean et tortor at risus. Eget arcu dictum varius duis at consectetur. Quisque egestas diam in arcu cursus euismod quis viverra. Ultrices vitae auctor eu augue ut. Laoreet sit amet cursus sit. Mauris commodo quis imperdiet massa tincidunt nunc. Risus nullam eget felis eget nunc lobortis. Odio pellentesque diam volutpat commodo sed egestas. Netus et malesuada fames ac turpis egestas maecenas. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Semper auctor neque vitae tempus quam. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Metus aliquam eleifend mi in nulla posuere.
        </p>
        <img src={SnagTagExplode} alt=""/>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
        <img src="" alt=""/>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
      </Project>

      <Project title='RAVN Grip' heroImage={RAVNgrip}>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
      </Project>

      <Project title='RAVN Cam' heroImage={RAVNcam}>
      </Project>

      <Project title='Stratocaster Guitar' heroImage={StratHero}>
      </Project>

      <Project title='SnoMote' heroImage={SnoMote}>
      </Project>

    </div>

  )
}

const Project = (props) => (
  <div className='project'>
    <div className="hero" style={{backgroundImage: `url("${props.heroImage}")`}}>
      <div className="background"></div>
    </div>
    <div className="contentContainer">
      <div className="content">
        <h1>{props.title}</h1>
        <h2>{props.subtile}</h2>
        {props.children}
      </div>
    </div>
  </div>
)

export default Projects;
