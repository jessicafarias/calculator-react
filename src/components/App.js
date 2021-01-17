import React, { PureComponent } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
