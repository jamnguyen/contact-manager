import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import { Provider } from './AppContext';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header title="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
