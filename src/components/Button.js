import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <div>
      {name.map(number => (
        <button key={number.toString()} type="button" className="btn-1">
          {number}
        </button>
      ))}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,

};

export default Button;
