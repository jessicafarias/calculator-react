import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="calculator-base">
    <>
      <Button name={['AC', '+/-', '%', '/']} />
      <Button name={['7', '8', '9', 'X']} />
      <Button name={['4', '5', '6', '-']} />
      <Button name={['1', '2', '3', '+']} />
      <Button name={['0', '.', '=']} />
    </>
  </div>
);

export default ButtonPanel;
