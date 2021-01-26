import React from 'react';
import PropTypes, { string } from 'prop-types';

function Button({ name, click }) {
  return (
    <div>
      {name.map(simbol => (
        <button onClick={() => click(simbol)} key={simbol.toString()} type="button" className="btn-1">
          {simbol}
        </button>
      ))}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.arrayOf(string).isRequired,
  click: PropTypes.func.isRequired,

};

export default Button;
