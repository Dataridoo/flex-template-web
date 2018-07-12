import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends Component {
  constructor(){
    super();

    this.state = {
      rating:1
    };
  }

  onStarClick(nextValue, prevValue, name){
    this.setState({rating:nextValue});
  }
  render (){
    const { rating } = this.state;
    return (
      <p className="ratings">
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <span className="ratings-text">({rating} Review)</span>
      </p>
    )
  }
}

export default Rating;