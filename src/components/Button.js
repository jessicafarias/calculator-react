import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, click, wide, color,
}) => (
  <button
    style={{ width: wide ? '50%' : '25%', backgroundColor: color }}
    onClick={() => click(name)}
    key={name.toString()}
    type="button"
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func,
  wide: PropTypes.bool,
  color: PropTypes.string,

};

Button.defaultProps = {
  color: '#F5913E',
  wide: false,
  click: () => {},

};

export default Button;
