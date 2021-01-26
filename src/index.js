import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';

export default class Index extends React.PureComponent {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
