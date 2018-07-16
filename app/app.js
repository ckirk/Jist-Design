import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Component Imports
import Process from './components/Process';
import Contact from './components/Contact';
import Work from './components/Work';
import Services from './components/Services';
import Home from './components/Home';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
// import Slider from './components/Slider';
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
          {/* <Route path='slider' component={Slider} /> */}
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const ContentBox = (props) => (
  <div id="contentBoxContainer" className={ props.location == '/process' ? 'process' : '' }>
    <div id="contentBox">
      {props.pushChildren}
    </div>
  </div>
)

const Header = (props) => (
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

  </div>
)

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
    // console.log('clicked!');
  }

  render() {
    return (
      <div id="app-container">

        {/* BACKGROUND */}
        <Background pathName={this.props.location.pathname} />

        {/* <Header /> */}

        {/* MAIN */}
        <div id="mainContainer">

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
            <div id="menu-btn" onClick={this.toggleOpen}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

          </div>

          {/* BODY */}
          <div id="body">

            {/* MENU */}
            <div id="menu">
              <Menu pathName={this.props.location.pathname}/>
            </div>

            {/* MAIN CONTENT */}
            <div id="contentContainer">
              {this.props.children}
            </div>
          </div>
        </div>

        {/* CONTENT - retire */}
        {/* <div id="content">
          <div id='top' className={this.props.location.pathname == '/process' ? 'process' : ''}></div>
          <div id='middle'>
            <div id='left'></div>
              { this.props.location.pathname == '/work' ?
                <ReactCSSTransitionGroup
                  transitionName="ourWork"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  {this.props.children}
                </ReactCSSTransitionGroup> :
                <ContentBox pushChildren={this.props.children} location={this.props.location.pathname}/>
              }
            <div id='right'></div>
          </div>
          <div id='bottom' className={ this.props.location.pathname == '/process' ? 'hide' : '' }></div>
        </div> */}


        {/* MOBILE MENU PANE */}
        <MobileMenu open={this.state.open} closeMenu={this.toggleOpen} />
      </div>
    )
  }
};

const NotFound = (props) => {
  return (
    <h1>Not Found</h1>
  )
}

export default App;
