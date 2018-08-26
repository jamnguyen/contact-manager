import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, type, name, value, placeHolder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={ name } >{ label }</label>
      <input
        type={ type }
        name={ name }
        value={ value }
        placeholder={ placeHolder }
        onChange={ onChange }
        className="form-control"
      />
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
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;