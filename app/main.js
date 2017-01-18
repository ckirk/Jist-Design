import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import App from './app';

// 3D Shazz
import threeExample from './three-example';

// Style Import
import './global.scss';

ReactDOM.render(<App />, document.getElementById('app'))

// inject3dModel();
threeExample();
