import React, { Component } from 'react';

export const ACTION_TYPES = {
  CONTACT: {
    DELETE: 'CONTACT_DELETE',
  }
}

const reduce = (state, action) => {
  switch(action.type) {
    case ACTION_TYPES.CONTACT.DELETE:
      return ({
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      });
    default:
      return state;
  }
}

const Context = React.createContext();

export class Provider extends Component {
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
      {
        id: 3,
        name: 'Mark Feehily',
        email: 'mark@feehily.com',
        phone: '090-000-2222'
      },
    ],
    dispatch: action => this.setState(
      reduce(this.state, action)
    )
  };

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;