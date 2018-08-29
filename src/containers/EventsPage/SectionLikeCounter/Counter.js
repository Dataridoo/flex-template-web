
import React from 'react';
import { connect } from 'react-redux';
import css from '../ListingPage.css';


class Counter extends React.Component {
 
      
  handleCounterClick = () => this.props.upCounter();

  render() {
    return (  
      <button 
        onClick={this.handleCounterClick} 
        className={css.fbShareBtn}> 
        <i className="hand point right icon"></i>Like &nbsp;
          {this.props.counter}
      </button>
      
    );
  }
}
  

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    upCounter: () => {
      dispatch({ type: 'INCREMENT'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)