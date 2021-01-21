import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick= () => {
    const result = calculate(this.state, '+');
    this.setState(result);
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
        <button type="button" onClick={this.handleClick}>Hello</button>
      </>
    );
  }
}

export default App;
