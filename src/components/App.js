import React, { PureComponent } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import { calculate } from "../logic/calculate";

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
