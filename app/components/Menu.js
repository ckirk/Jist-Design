import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Menu = (props) => {
  return (
    <div id="menu">
      <ul>
        <Link to='/work'><li>Our Work</li></Link>
        <Link to='/process'><li>Our Process</li></Link>
        <Link to='/services'><li>Services</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Menu;
