import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
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
      backgroundImage: `url("${props.image}")`
    }}>
    <DetailsBox title={props.title} description={props.description}/>
  </div>
)

class DetailsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: window.innerWidth > 768 ? true : false,
      mobile: window.innerWidth > 768 ? false : true
    }
  };

  componentDidMount() {
    if (ReactDOM.findDOMNode(this)) {
      const height = ReactDOM.findDOMNode(this).offsetHeight;
      this.setState({
        height: height,
        position: this.state.open ? 0 : 55 - height
      });
    }
  }

  toggleOpen = () => {
    if (this.state.mobile) {
      // get height of detailsBox
      const height = ReactDOM.findDOMNode(this).offsetHeight;
      this.setState({
        open: !this.state.open,
        position: this.state.open ? 55 - height : 0
      });
    }
  };

  render() {
    if (this.props.description != '') {
      return (
        <div style={{bottom: this.state.mobile ? this.state.position : 0}} className={'detailsBox noselect'}
          onClick={this.toggleOpen} >
          {this.props.title != '' ? <h2>{this.props.title}</h2> : null }
          <p>{this.props.description}</p>
        </div>
      )
    } else {
      return ( null )
    }
  }
}

export default Work;
