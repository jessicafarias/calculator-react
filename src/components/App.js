import React, { PureComponent } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends PureComponent {
  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
