import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../AppContext';

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        { value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-5 mb-3"><span className="text-danger">Contact</span> List</h1>
              { contacts.map(contact => {
                return <Contact key={contact.id} user={contact} />
              }) }
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
  
}

export default Contacts;
