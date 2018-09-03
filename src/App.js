import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { Provider } from './AppContext';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contact/Contacts';
import ContactAdd from './components/contact/ContactAdd';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header title="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ Contacts }></Route>
                <Route exact path="/about" component={ About }></Route>
                <Route exact path="/contact/add" component={ ContactAdd }></Route>
                <Route exact component={ NotFound }></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
