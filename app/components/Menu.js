import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Menu = (props) => {
  return (
    <div id="menu">
      <ul>
        <Link to='/work' activeClassName="active"><li>Our Work</li></Link>
        <Link to='/process' activeClassName="active"><li>Our Process</li></Link>
        <Link to='/services' activeClassName="active"><li>Services</li></Link>
        <Link to='/contact' activeClassName="active"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Menu;
