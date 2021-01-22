import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <h1 className="text-gray">
      { result }
    </h1>
  );
};

Display.propTypes = {
  result: PropTypes.string,

};

Display.defaultProps = {
  result: '0',
};

export default Display;
