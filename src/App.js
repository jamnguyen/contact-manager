import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { Provider } from './AppContext';
import Header from './components/layout/Header';
import Contacts from './components/contact/Contacts';
import ContactAdd from './components/contact/ContactAdd';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header title="Contact Manager" />
          <div className="container">
            <ContactAdd />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
