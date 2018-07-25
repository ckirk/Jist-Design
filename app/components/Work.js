import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import slideData from '../slideData';
import Swipeable from 'react-swipeable';

import Projects from './Projects';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      length: 0,
      slidePosition: 0,
      viewerWidth: null
    }
  };

  handleKeyDown = (event) => {
    // console.log(event.key);
    if(event.key == 'ArrowLeft'){
      this.handlePrevious();
    } else if (event.key == 'ArrowRight') {
      this.handleNext();
    }
  };

  handleNext = () => {
    // console.log('length', this.state.length);
    // if reached the end of the slideshow
    let nextPage;
    if (this.state.page+1 > this.state.length-1) {
      nextPage = 0;
    } else {
      nextPage = this.state.page + 1
    }
    window.scrollTo(0, 0);
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
    // console.log( 'test', document.getElementById("viewer").offsetWidth );
    // for full screen use window.innerWidth
    // console.log('updating viewer width!');
    this.setState({
      viewerWidth: document.getElementById("projectsWrapper").offsetWidth,
      slidePosition: this.state.page * document.getElementById("projectsWrapper").offsetWidth
    });
  }

  countProjects = () => {
    this.setState({
      length: document.getElementsByClassName("project").length
    });
  }

  componentWillMount = () => {
    // this.updateViewerWidth();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateViewerWidth);
    document.addEventListener("keydown", this.handleKeyDown);
    this.updateViewerWidth();
    this.countProjects();
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateViewerWidth);
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    // Build slides from slideData Object
    // const projects = slideData.map((object, index) =>
    //   <Project key={index} title={object.title} image={object.image} description={object.description} />
    // );

    return (
      <div id="ourWork">

        <Projects slidePosition={this.state.slidePosition} />

        {/* SWIPABLE area and arrow controls */}
        <Swipeable onSwipedRight={this.handlePrevious} onSwipedLeft={this.handleNext} style={{touchAction: 'none'}}>
          <div id="controls">
            <div id="back" className="navButton" onClick={this.handlePrevious}>
              <div id="arrowLeft" className="arrow"><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
            </div>
            <div id="next" className="navButton" onClick={this.handleNext}>
              <div id="arrowRight" className="arrow"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
            </div>
          </div>
        </Swipeable>

        {/* STICKY FOOTER NAV */}
        <div id="stickyFooter">
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


class DetailsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // open: window.innerWidth > 768 ? true : false,
      open: true,
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
