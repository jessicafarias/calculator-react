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
          <div className="resize">
            <Button click={clickHandler} name="AC" color="#E0E0E0" />
            <Button click={clickHandler} name="+/-" color="#E0E0E0" />
            <Button click={clickHandler} name="%" color="#E0E0E0" />
            <Button click={clickHandler} name="/" />
          </div>

          <div className="resize">
            <Button click={clickHandler} name="7" color="#E0E0E0" />
            <Button click={clickHandler} name="8" color="#E0E0E0" />
            <Button click={clickHandler} name="9" color="#E0E0E0" />
            <Button click={clickHandler} name="X" />
          </div>

          <div className="resize">
            <Button click={clickHandler} name="4" color="#E0E0E0" />
            <Button click={clickHandler} name="5" color="#E0E0E0" />
            <Button click={clickHandler} name="6" color="#E0E0E0" />
            <Button click={clickHandler} name="-" />
          </div>
          <div className="resize">
            <Button click={clickHandler} name="1" color="#E0E0E0" />
            <Button click={clickHandler} name="2" color="#E0E0E0" />
            <Button click={clickHandler} name="3" color="#E0E0E0" />
            <Button click={clickHandler} name="+" />
          </div>

          <div className="resize">
            <Button click={clickHandler} name="0" color="#E0E0E0" wide />
            <Button click={clickHandler} name="." color="#E0E0E0" />
            <Button click={clickHandler} name="=" />
          </div>

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
