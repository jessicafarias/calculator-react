
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};


class App extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        return <div>Hello World 
          <ShoppingCart/>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));