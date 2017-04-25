import React, { PropTypes, Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Swipeable from 'react-swipeable';


class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Swipeable onSwipedLeft={this.props.closeMenu} style={{touchAction: 'none'}}>
        <div id="mobile-menu" className={ this.props.open ? 'open' : null }>
          <div id="menu-options">
            <ul onClick={this.props.closeMenu}>
              <Link to='/work' activeClassName="active"><li>Our Work</li></Link>
              <Link to='/process' activeClassName="active"><li>Our Process</li></Link>
              <Link to='/services' activeClassName="active"><li>Services</li></Link>
              <Link to='/contact' activeClassName="active"><li>Contact</li></Link>
            </ul>
          </div>
        </div>
      </Swipeable>
    );
  }
}

export default MobileMenu;
