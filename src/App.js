import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="john@doe.com"
            phone="090-000-0000"
          />
          <Contact
            name="Tony Stark"
            email="tony@stark.com"
            phone="090-111-1111"
          />
        </div>
      </div>
    );
  }
}

export default App;
