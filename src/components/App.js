import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleClick = btnName => {
    setState(state => calculate(state, btnName));
  };
  return (
    <div className="calculator-base">
      <>
        <Display result={state.next} total={state.total} operation={state.operation} />
        <ButtonPanel clickHandler={handleClick} />
      </>
    </div>
  );
};

export default App;
