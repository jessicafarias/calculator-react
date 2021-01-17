import React from 'react';
import ReactDOM from 'react-dom';
// import Big from 'big.js';
import './styles.css';
import App from './components/App';

export default class Index extends React.PureComponent {
  render() {
    // const a = Big(1.2).mul(2);
    // return <Items quantity={`${a}`} />;
    return <App />;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
