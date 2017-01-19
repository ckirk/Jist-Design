import React, { PropTypes } from 'react';

const slideData = [
  {
    title: 'TEST',
    image: '../images/snagtag_enclosure',
    description: 'Lorem ipsum dolor sit amet, qui in saepe percipitur. Te ius vidit possim iudicabit, qui ne habemus intellegebat. Magna assum propriae ne ius. Sit no nihil nostro, vitae appellantur an has. In quo tantas fabulas, an cum copiosae abhorreant, duo an decore ceteros.'
  }, {
    title: 'BEST',
    image: '../images/raspi_enclosure',
    description: 'Lorem ipsum dolor sit amet, qui in saepe percipitur. Te ius vidit possim iudicabit, qui ne habemus intellegebat. Magna assum propriae ne ius. Sit no nihil nostro, vitae appellantur an has. In quo tantas fabulas, an cum copiosae abhorreant, duo an decore ceteros.'
  }, {
    title: 'JEST',
    image: '../images/a.png',
    description: 'Lorem ipsum dolor sit amet, qui in saepe percipitur. Te ius vidit possim iudicabit, qui ne habemus intellegebat. Magna assum propriae ne ius. Sit no nihil nostro, vitae appellantur an has. In quo tantas fabulas, an cum copiosae abhorreant, duo an decore ceteros.'
  },
];

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, length: slideData.length, slidePosition: 0, viewerWidth: 500 }
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
    // this.setState({ viewerWidth: $(window).width() });
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
      <Slide key={index} title={object.title} image={object.image} />
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
            &lt; Back
          </div>
          <div id="next" className="navButton" onClick={this.handleNext}>
            Next &gt;
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
    <h1>{props.title}</h1>
  </div>
)

export default Work;
