import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer, ACTION_TYPES } from '../../AppContext';
import TextInput from '../layout/TextInput';

class ContactAdd extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onAddContact = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: ACTION_TYPES.CONTACT.ADD, payload: newContact });

    // Clear form after submitting
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  }

  onInputChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        { value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onAddContact.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    name="name"
                    value={ name }
                    placeHolder="Enter name..."
                    onChange={ this.onInputChange }
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    value={ email }
                    placeHolder="Enter email..."
                    onChange={ this.onInputChange }
                  />
                  <TextInput
                    label="Phone"
                    name="phone"
                    value={ phone }
                    placeHolder="Enter phone..."
                    onChange={ this.onInputChange }
                  />
                  <input
                    type="submit"
                    className="btn btn-light btn-block"
                    value="Add" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactAdd;