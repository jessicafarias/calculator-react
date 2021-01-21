import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick= btnName => {
    const result = calculate(this.state, btnName);
    this.setState(result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <Display result={`n:${next} ${operation} t:${total}`} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
