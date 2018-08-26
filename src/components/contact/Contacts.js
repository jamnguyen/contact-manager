import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../AppContext';

class Contacts extends Component {
  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  }

  render() {
    return (
      <Consumer>
        { value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              { contacts.map(contact => {
                return <Contact key={contact.id} user={contact} onDelete={this.deleteContact}/>
              }) }
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
