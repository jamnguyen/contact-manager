import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer, ACTION_TYPES } from '../../AppContext';
import TextInput from '../layout/TextInput';

class ContactAdd extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onAddContact = (dispatch, e) => {
    e.preventDefault();

    // Name
    if (this.state.name === '' || this.state.name === null || this.state.name === undefined) {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    // Email
    if (this.state.email === '' || this.state.email === null || this.state.email === undefined) {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    // Phone
    if (this.state.phone === '' || this.state.phone === null || this.state.phone === undefined) {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

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
      phone: '',
      errors: {}
    });

    // Redirect to Home
    this.props.history.push('/');
  }

  onInputChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const { name, email, phone, errors } = this.state;

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
                    error={ errors.name }
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    value={ email }
                    placeHolder="Enter email..."
                    onChange={ this.onInputChange }
                    error={ errors.email }
                  />
                  <TextInput
                    label="Phone"
                    name="phone"
                    value={ phone }
                    placeHolder="Enter phone..."
                    onChange={ this.onInputChange }
                    error={ errors.phone }
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