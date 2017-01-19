import React, { PropTypes } from 'react';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 }
  };

  next = () => {
    this.setState({ page: this.state.page+1 });
  };

  back = () => {
    this.setState({ page: this.state.page-1 });
  };

  render() {
    console.log('page', this.state.page);
    return (
      <div id="controls">
        <div id="back" className="navButton" onClick={this.back}>
          &lt; Back
        </div>
        <div id="next" className="navButton" onClick={this.next}>
          Next &gt;
        </div>
      </div>
    );
  }
};

export default Work;
