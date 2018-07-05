import React, { Component } from 'react';

// 3D Shazz
import Inject3dModel from '../ThreeStuff';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  componentDidMount() {
    Inject3dModel();
  }

  render() {
    return (
      <div id="background">
        <div id="threeBlur" className={'blur' + (this.props.pathName == '/work' ? ' hidden' : '')}>
          <div id="3dInject"></div>
        </div>
        <div id="darken"></div>
      </div>
    );
  }
}

export default Background;
