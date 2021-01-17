import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button type="button" className="btn-1">
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,

};

export default Button;
