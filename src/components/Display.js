import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  let { result, operation, total } = props;

  if (result === null && total === null) {
    result = '0';
  }

  if (operation === '=') {
    operation = '';
    total = '';
  }

  return (
    <div className="text-gray">
      <h1>
        { total }
        { operation }
        { result }

      </h1>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.number,
  operation: PropTypes.string,
  total: PropTypes.string,

};

Display.defaultProps = {
  result: '0',
  operation: '',
  total: '0',

};

export default Display;
