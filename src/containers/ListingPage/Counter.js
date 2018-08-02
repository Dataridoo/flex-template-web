import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  handleCounterClick = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }


  render() {
    return (
      <button 
        onClick={this.handleCounterClick} 
        className="mini ui facebook button"> 
        <i className="hand point right icon"></i>&nbsp;&nbsp; Like &nbsp;
        {this.props.count}
      </button>

    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);