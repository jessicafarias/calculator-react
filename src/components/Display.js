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
    <h1 className="text-gray">
      { total }
      { operation }
      { result }

    </h1>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
  total: PropTypes.string,

};

Display.defaultProps = {
  result: '0',
  operation: '',
  total: '0',

};

export default Display;
