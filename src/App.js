import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
