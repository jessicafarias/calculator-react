import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <div>
      {name.map(simbol => (
        <button key={simbol.toString()} type="button" className="btn-1">
          {simbol}
        </button>
      ))}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,

};

export default Button;
