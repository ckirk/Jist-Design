import React, { PropTypes } from 'react';
import slideData from '../slideData';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      length: slideData.length,
      slidePosition: 0,
      viewerWidth: window.innerWidth
    }
  };

  handleNext = () => {
    // if reached the end of the slideshow
    let nextPage;
    if (this.state.page+1 > this.state.length-1) {
      nextPage = 0;
    } else {
      nextPage = this.state.page + 1
    }
    this.setState({
      page: nextPage,
      slidePosition: nextPage * this.state.viewerWidth
    });
  };

  handlePrevious = () => {
    // if reached the end of the slideshow
    let nextPage;
    if (this.state.page-1 < 0) {
      nextPage = this.state.length-1;
    } else {
      nextPage = this.state.page - 1
    }
    this.setState({
      page: nextPage,
      slidePosition: nextPage * this.state.viewerWidth
    });
  };

  updateViewerWidth = () => {
    this.setState({
      viewerWidth: window.innerWidth,
      slidePosition: this.state.page * window.innerWidth
    });
    console.log('width', window.innerWidth);
  }

  componentWillMount = () => {
    this.updateViewerWidth;
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateViewerWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateViewerWidth);
  }

  render() {
    // Build slides from slideData Object
    const slides = slideData.map((object, index) =>
      <Slide key={index} title={object.title} image={object.image} description={object.description} />
    );

    return (
      <div id="ourWork">
        <div id="viewer">
          <div id="slideWrapper" style={{transform: `translateX(-${this.state.slidePosition}px)`}}>
            {slides}
          </div>
        </div>
        <div id="controls">
          <div id="back" className="navButton" onClick={this.handlePrevious}>
            <div id="arrowLeft" className="arrow"><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
          </div>
          <div id="next" className="navButton" onClick={this.handleNext}>
            <div id="arrowRight" className="arrow"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    );
  }
};

const Slide = (props) => (
  <div className='slide' style={{
      background: `url("${props.image}") no-repeat center center`,
      backgroundSize: 'cover'
    }}>
    <div className='detailsBox'>
      {props.title != '' ? <h2>{props.title}</h2> : null }
      <p>{props.description}</p>
    </div>
  </div>
)

export default Work;
