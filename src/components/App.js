import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }
  render() {
    return (
      <>
        <Display result={calculate(
          {
            total: 10,
            next: 12,
            operation: '',
          }, '+',
        ).operation}
        />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
