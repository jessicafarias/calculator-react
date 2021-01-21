import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 'Initial State',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      total: '10',
      // next: null,
      // operation: null,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel />
        <button type="button" onClick={this.handleClick}>Hello</button>
      </>
    );
  }
}

export default App;
