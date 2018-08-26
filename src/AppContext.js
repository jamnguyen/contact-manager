import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends React.Component {
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
    ]
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