import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showDetails: false
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  deleteContact = (id) => {
    this.props.onDelete(id);
  }

  render() {
    const { id, name, email, phone } = this.props.user;
    const { showDetails } = this.state;

    return (
      <div className="card card-body mb-3">
        <div className="d-flex justify-content-between">
          <h4>{ name }  <i className={'fas ' + (showDetails ? 'fa-angle-up' : 'fa-angle-down')} onClick={this.toggleDetails}/></h4>
          <i className="fas fa-times text-danger" onClick={this.deleteContact.bind(this, id)}/>          
        </div>
        { showDetails ? (
          <ul className="list-group">
            <li className="list-group-item">Email: { email }</li>
            <li className="list-group-item">Phone: { phone }</li>
          </ul>
        ) : null }
      </div>
    )
  }
}

Contact.propTypes = {
  user: PropTypes.object.isRequired
}

export default Contact;