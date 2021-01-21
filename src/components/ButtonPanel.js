import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick=() => {
    const { clickHandler } = this.props;
    clickHandler();
  }

  render() {
    const { clickHandler } = this.props;
    return (
      <div className="calculator-base">
        <>
          <Button click={clickHandler} name={['AC', '+/-', '%', '/']} />
          <Button name={['7', '8', '9', 'X']} />
          <Button name={['4', '5', '6', '-']} />
          <Button name={['1', '2', '3', '+']} />
          <Button name={['0', '.', '=']} />
        </>
      </div>
    );
  }
}

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
