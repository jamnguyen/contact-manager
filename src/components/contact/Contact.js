import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer, ACTION_TYPES } from '../../AppContext';

class Contact extends Component {
  state = {
    showDetails: false
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  deleteContact = (id, dispatch) => {
    dispatch({
      type: ACTION_TYPES.CONTACT.DELETE,
      payload: id
    });
  }

  render() {
    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          const { id, name, email, phone } = this.props.user;
          const { showDetails } = this.state;

          return (
            <div className="card card-body mb-3">
              <div className="d-flex justify-content-between">
                <h4>{ name }  <i className={'pointer fas ' + (showDetails ? 'fa-angle-up' : 'fa-angle-down')} onClick={this.toggleDetails}/></h4>
                <i className="fas fa-times text-danger pointer" onClick={this.deleteContact.bind(this, id, dispatch)}/>          
              </div>
              { showDetails ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: { email }</li>
                  <li className="list-group-item">Phone: { phone }</li>
                </ul>
              ) : null }
            </div>
          )

        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  user: PropTypes.object.isRequired
}

export default Contact;