
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import Big from 'big.js';



const Items = (props) => {
  return <h1>number: {props.quantity}</h1>
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired,
};
Items.defaultProps = {
  quantity: 0
};

class Calculator extends React.Component {
  

  render() {
    const a = Big(1.2).mul(2);
    return <Items quantity={`${a}`}/>
  }
};


class App extends React.Component {
    render(){
        return <div> 
          <Calculator/>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));