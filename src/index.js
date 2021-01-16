import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Big from 'big.js';
import './styles.css';

const Items = props => {
  const { quantity } = props;
  return (
    <h1 className="text-gray">
      number:
      { quantity }
    </h1>
  );
};

Items.propTypes = {
  quantity: PropTypes.number,

};

Items.defaultProps = {
  quantity: 0,

};

export default class App extends React.PureComponent {
  render() {
    const a = Big(1.2).mul(2);
    return <Items quantity={`${a}`} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
