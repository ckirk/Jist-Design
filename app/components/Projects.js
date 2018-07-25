import React, { PropTypes } from 'react';

// Image Imports
import SnagTagHero from '../images/snagtag/st_hero.png'
import SnagTagExplode from '../images/snagtag/st_explode.png'
import SnagTagLoop from '../images/snagtag/st_spin.gif'
import SnagTagColors from '../images/snagtag/st_colors.jpg'
import SnagTagLogo from '../images/snagtag/st_logo_placement.jpg'
import SnagTagPrimitives from '../images/snagtag/st_primitives.jpg'
import SnagTagOptions from '../images/snagtag/st_two_options.jpg'

import HubHero from '../images/snagtag_hub/st_hub_2x.png'
import HubTable from '../images/snagtag_hub/st_hub_1.jpg'
import HubTableDark from '../images/snagtag_hub/st_hub_2.jpg'
import HubMockup from '../images/snagtag_hub/st_hub_3.jpg'
import HubLed from '../images/snagtag_hub/st_hub_4.jpg'
import HubLoop from '../images/snagtag_hub/st_hub_loop.gif'

import RAVNgrip from '../images/GRIP-low.png'
import RAVNcam from '../images/ravn_cam/cam.png'
import StratHero from '../images/strat_angle.png'

import SnoMote from '../images/snomote_1.png'
import JistLogo from '../images/logo_200.png'

const Projects = (props) => {
  return (
    <div id="projectsWrapper" style={{transform: `translateX(-${props.slidePosition}px)`}}>

      <Project title='SnagTag' heroImage={SnagTagHero}>
        <h2>Real-time analytics for retail display items</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In pellentesque massa placerat duis ultricies lacus sed. Ac tortor dignissim convallis aenean et tortor at risus. Eget arcu dictum varius duis at consectetur. Quisque egestas diam in arcu cursus euismod quis viverra. Ultrices vitae auctor eu augue ut. Laoreet sit amet cursus sit. Mauris commodo quis imperdiet massa tincidunt nunc. Risus nullam eget felis eget nunc lobortis. Odio pellentesque diam volutpat commodo sed egestas. Netus et malesuada fames ac turpis egestas maecenas. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Semper auctor neque vitae tempus quam. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Metus aliquam eleifend mi in nulla posuere.
        </p>
        <img src={SnagTagExplode} alt=""/>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
        <img src={SnagTagLoop} alt=""/>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
        <img src={SnagTagColors} alt=""/>
        <img src={SnagTagPrimitives} alt=""/>
        <img src={SnagTagOptions} alt=""/>
        <img src={SnagTagLogo} alt=""/>
      </Project>

      <Project title='RAVN GRIP' heroImage={RAVNgrip}>
        <h2>Wireless augmented reality controller for M4 Carbine rifle</h2>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
      </Project>

      <Project title='iBeacon Hub' heroImage={HubHero}>
        <h2>Sleek wireless hub for retail data collection</h2>
        <img src={HubMockup} alt=""/>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
        <img src={HubTable} alt=""/>
        <img src={HubLed} alt=""/>
        <img src={HubTableDark} alt=""/>
        <p>
          Leo duis ut diam quam. Sed odio morbi quis commodo odio aenean. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Tincidunt praesent semper feugiat nibh sed pulvinar. Vulputate eu scelerisque felis imperdiet. Non arcu risus quis varius quam quisque id. Quam pellentesque nec nam aliquam sem et tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut morbi tincidunt augue interdum velit euismod in. Et sollicitudin ac orci phasellus egestas tellus. Erat nam at lectus urna duis convallis convallis tellus id.
        </p>
        <img src={HubLoop} alt=""/>
      </Project>

      <Project title='RAVN CAM' heroImage={RAVNcam}>
        <h2>Low latency, real-time video streaming for military applications</h2>
      </Project>

      <Project title='Stratocaster Guitar' heroImage={StratHero}>
        <h2>High quality modern replica of a 1962 Fender Stratocaster</h2>
      </Project>

      <Project title='SnoMote' heroImage={SnoMote}>
        <h2>Rugged, all-weather wireless music control with a focus on ergonomics</h2>
      </Project>

    </div>

  )
}

const Project = (props) => (
  <div className='project'>
    <div className="hero" style={{backgroundImage: `url("${props.heroImage}")`}}>
      <div className="background"></div>
      <div className="arrow">
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
    </div>
    <div className="contentContainer">
      <div className="content">
        <h1>{props.title}</h1>
        {props.children}
        <div className="logo">
          <img src={JistLogo} alt=""/>
        </div>
      </div>
    </div>
  </div>
)

export default Projects;
