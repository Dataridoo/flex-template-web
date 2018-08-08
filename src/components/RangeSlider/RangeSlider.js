import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import css from './RangeSlider';


class Rangeslider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {     
      sliderValue: 10
    }
  }

  
  handleChange = (value) => {
    this.setState({
      sliderValue: value
    })
  }

  render () {
    const { sliderValue } = this.state
    return (
      <div className={css.sliderHorizontal}>
        <Slider
          min={0}
          max={100}
          value={sliderValue}
          orientation='horizontal'
          onChange={this.handleChange}
        />
        <div className={css.value}>{sliderValue}</div>
      </div>
       
    )
  }
}

export default Rangeslider; 

