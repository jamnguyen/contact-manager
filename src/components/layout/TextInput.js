import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({ label, type, name, value, placeHolder, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={ name } >{ label }</label>
      <input
        type={ type }
        name={ name }
        value={ value }
        placeholder={ placeHolder }
        onChange={ onChange }
        className={ classnames('form-control', { 'is-invalid': error }) }
      />
      { error && <div className="invalid-feedback">{ error }</div> }
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;