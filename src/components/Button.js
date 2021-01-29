import React from 'react';
import PropTypes, { string } from 'prop-types';

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
  name: PropTypes.arrayOf(string).isRequired,
  click: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,

};

Button.defaultProps = {
  color: '#F5913E',
  wide: false,

};

export default Button;
