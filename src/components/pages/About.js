import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-5">About Contact Manager</h1>
        <p>
          Simple React app to manage contacts based on Udemy course <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/react-front-to-back/">React Front To Back</a> by Brad Traversy.
          <br/>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jamnguyen/contact-manager"><i className="fas fa-angle-right" />  Github Repository</a>
          <br/>
          <br/>
        </p>

        <div className="lead font-bold">Knowledge covered</div>
        <div>- Context API</div>
        <div>- Controlled Form</div>
        <div>- Routing</div>

        <div className="lead font-bold mt-3">Packages used</div>
        <div>- React Router DOM</div>
        <div>- Bootstrap</div>
        <div>- Classnames</div>
        <div>- UUID</div>
      </div>
    )
  }
}

export default About;