import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// import styles
require("./global.scss");

// import jquery
var $ = require("jquery");

// import three.js
var THREE = require("three");

var cats = require('./cats.js');
var spikey = require('./spikey.js');


// React Jazz
var App = React.createClass({
  render () {
    return (
      <div id="container">
        <div id="left"></div>
        <div id="showcase">
          <Router history={hashHistory}>

            <Route path='/'>

              <IndexRoute component={Home} />
              <Route path='work' component={Work} />
              <Route path='process' component={Process} />
              <Route path='services' component={Services} />

              <Route path='*' component={NotFound} />

            </Route>

          </Router>
        </div>
        <div id="darken"></div>
        <div id="main">
          <Header />
          <Menu />
        </div>
      </div>
    )
  }
})

var Header = React.createClass({
  render () {
    return (
      <div id="header">
        <h1>JIST <span>Design</span></h1>
        <h2>Industrial Design // Electronics // Prototyping // Manufacturing</h2>
      </div>
    )
  }
})

var Menu = React.createClass({
  render () {
    return (
      <div id="menu">
        <ul>
          <li>Our Work</li>
          <li>Our Process</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
})

var Home = React.createClass({
  render () {
    return (
      <h1>Home</h1>
    )
  }
})

var Work = React.createClass({
  render () {
    return (
      <h1>Work</h1>
    )
  }
})

var Process = React.createClass({
  render () {
    return (
      <h1>Process</h1>
    )
  }
})

var Services = React.createClass({
  render () {
    return (
      <h1>Services</h1>
    )
  }
})

var Contact = React.createClass({
  render () {
    return (
      <h1>Contact</h1>
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

ReactDOM.render(<App />, document.getElementById('app'))