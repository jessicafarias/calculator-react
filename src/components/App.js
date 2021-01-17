import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>
          State counter :
          {counter}
        </h2>
        <div>
          <Button name="C" />
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
