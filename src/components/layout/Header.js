import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-5 py-2">
        <div className="container">
          <Link to="/" className="navbar-brand font-bold">
            { this.props.title }
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus-circle" /> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question-circle" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;