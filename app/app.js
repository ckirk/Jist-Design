import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Component Imports
import Process from './components/Process';
import Contact from './components/Contact';
import Work from './components/Work';
import Services from './components/Services';
import Home from './components/Home';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Background from './components/Background';


// REACT-ROUTER
class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Base}>
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


class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  };

  toggleMobileMenu = () => {
    this.setState({ open: !this.state.open });
    // console.log('clicked!');
  }

  render() {
    return (
      <div id="app-container">

        {/* STICKY HEADER - only for 'work' */}
        {this.props.location.pathname == '/work' &&
          <StickyHeader toggleMobileMenu={this.toggleMobileMenu} />
        }

        {this.props.location.pathname != '/work' ?
            // Classic Design
            <BasicContainer toggleMobileMenu={this.toggleMobileMenu} pathName={this.props.location.pathname}>
              {this.props.children}
            </BasicContainer>
          : // New Design - currently just for 'work'
              // sticky header, top menu nav, full width, scrollable
            <div id="workContainer">
              {this.props.children}
            </div>
        }

        {/* MOBILE MENU (sidebar) */}
        <MobileMenu open={this.state.open} closeMenu={this.toggleMobileMenu} />

        {/* BACKGROUND (3D stuff and gradient - behind all pages) */}
        <Background pathName={this.props.location.pathname} />
      </div>
    )
  }
};

const BasicContainer = (props) => (
  <div id="classicContainer">

    {/* HEADER */}
    <div id="header">
      <Link to='/'>
          <img src='./images/logo_large_circle.png' alt=""/>
        <h1>
          JIST <span>Design</span>
        </h1>
      </Link>
      <h2>
        <span>Industrial Design // Electronics // IoT // Prototyping // Manufacturing</span>
      </h2>

      {/* MOBILE MENU BTN */}
      <div id="menu-btn" onClick={props.toggleMobileMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

    </div>

    {/* BODY */}
    <div id="body">

      {/* MENU */}
      <div id="menu">
        <Menu pathName={props.pathname} />
      </div>

      {/* MAIN CONTENT */}
      <div id="contentContainer">
        {props.children}
      </div>
    </div>
  </div>
);

const StickyHeader = (props) => (
  <div id='stickyHeader'>

    <Link to='/' className='logo'>
      <img src='./images/logo_large_circle.png' alt=""/>
      <h1>
        JIST <span>Design</span>
      </h1>
      <h2>Industrial Design // Electronics // IoT // Prototyping // Manufacturing</h2>
    </Link>

    <div className="menu">
      <Link to='/work' activeClassName="active">Our Work</Link>
      <Link to='/process' activeClassName="active">Our Process</Link>
      <Link to='/services' activeClassName="active">Services</Link>
      <Link to='/contact' activeClassName="active">Contact</Link>
    </div>

    {/* MOBILE MENU BTN */}
    <div id="menu-btn" onClick={props.toggleMobileMenu}>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>

  </div>
);

const NotFound = (props) => {
  return (
    <h1>Not Found</h1>
  )
}

export default App;
