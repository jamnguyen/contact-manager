import React, { Component } from 'react'
import Contact from '../Contact/Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '090-000-0000'
      },
      {
        id: 1,
        name: 'Tony Stark',
        email: 'tony@stark.com',
        phone: '090-000-1111'
      },
      {
        id: 2,
        name: 'Michael Owen',
        email: 'michael@owen.com',
        phone: '090-000-1010'
      },
    ]
  }

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  }

  render() {

    return (
      <React.Fragment>
        { this.state.contacts.map(contact => {
          return <Contact key={contact.id} user={contact} onDelete={this.deleteContact}/>
        }) }
      </React.Fragment>
    )
  }
}

export default Contacts;
