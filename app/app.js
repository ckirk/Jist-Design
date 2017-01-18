import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Component Imports
import Process from './components/Process';
import Contact from './components/Contact';
import Background from './components/Background';
import Work from './components/Work';
import Services from './components/Services';
import Home from './components/Home';
import Menu from './components/Menu';


// REACT-ROUTER
class App extends Component {
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
}

const BaseApp = (props) => {
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
          <Menu />
          {props.children}
        </div>
        <div id="footer"></div>
      </div>
    </div>
  )
}

const NotFound = (props) => {
  return (
    <h1>Not Found</h1>
  )
}

export default App;
