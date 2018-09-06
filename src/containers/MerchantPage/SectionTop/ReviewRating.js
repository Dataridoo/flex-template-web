import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewRating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 4
    };
  }
  render() {
    const { rating } = this.state;
    
    return (                
      <div >
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
        /> 
        
      </div>
    );
  }
}
export default ReviewRating;