import React, { PureComponent } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends PureComponent {
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
