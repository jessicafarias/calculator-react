import React from 'react';
import PropTypes, { string } from 'prop-types';

function Button({ name, click }) {
  const getClass = someInput => {
    switch (someInput) {
      case '0': {
        return 'btn2 gray';
      }
      case '+': {
        return 'btn1 orange';
      }
      case '-': {
        return 'btn1 orange';
      }
      case '/': {
        return 'btn1 orange';
      }
      case 'X': {
        return 'btn1 orange';
      }
      case '=': {
        return 'btn1 orange';
      }
      default: {
        return 'btn1 gray';
      }
    }
  };
  return (
    <div className="buttons">
      {name.map(simbol => (
        <button onClick={() => click(simbol)} key={simbol.toString()} type="button" className={getClass(simbol)}>
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
