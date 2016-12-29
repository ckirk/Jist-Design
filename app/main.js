import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var inject3dModel = require('./three.js');
var threeExample = require('./three-example.js');

// import styles
require("./global.scss");

var cats = require('./cats.js');

console.log(cats);

// React Jazz
var App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>

        <Route path='/' component={BaseApp}>
        
          <IndexRoute component={Home} />
          <Route path='work' component={Work} />
          <Route path='process' component={Process} />
          <Route path='services' component={Services} />
          <Route path='contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Route>

      </Router>
    )
  }
})

var BaseApp = React.createClass({
  render () {
    return (
      <div id="app-container">
        <div id="main">
          <Link to='/'>
            <div id="header">
              <h1>JIST <span>Design</span></h1>
              <h2>Industrial Design // Electronics // Prototyping // Manufacturing</h2>
            </div>
          </Link>
          <div id="body">
            <div id="menu">
              <ul>
                <Link to='/work'><li>Our Work</li></Link>
                <Link to='/process'><li>Our Process</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
              </ul>
            </div>
            {this.props.children}
          </div>
          <div id="footer"></div>
        </div>
      </div>
    )
  }
})

var Home = React.createClass({
  render () {
    return (
      <div>
        <Background />
      </div>
    )
  }
})

var Work = React.createClass({
  render () {
    return (
      <div>
        <h1>Work</h1>
        <Background />
      </div>
    )
  }
})

var Process = React.createClass({
  render () {
    return (
      <div id="content">
        <h1>Process</h1>
        <Background />
      </div>
    )
  }
})

var Services = React.createClass({
  render () {
    return (
      <div id="content">
        <h1>Services</h1>
        <Background />
      </div>
    )
  }
})

var Contact = React.createClass({
  render () {
    return (
      <div id="content">
        <h1>Contact</h1>
        <Background />
      </div>
    )
  }
})

var NotFound = React.createClass({
  render () {
    return (
      <h1>Not Found</h1>
    )
  }
})

var Background = React.createClass({
  render () {
    return (
      <div id="background">
        <div id="left"></div>
        <div id="showcase"></div>
        <div id="darken"></div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))

// inject3dModel();
threeExample();