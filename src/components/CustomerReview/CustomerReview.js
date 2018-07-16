import React from 'react';
import PropTypes from 'prop-types';
import reviewer from './images/reviewer.jpg';


import css from './CustomerReview.css';

const CustomerReview = props => {
  

  return (
    <div className={css.reivews}>
      <h2 className={css.title}>Customer Review</h2>
      <p className={css.reviewComment}>Here comes some text, Here comes some text, Here comes some text,Here comes some text, </p>
     <p className={css.reviewImage}> <img src={reviewer} alt="reviewer" /><span className={css.reviewerName}>-John Smith</span></p>
  </div>
  );
};



const { string } = PropTypes;

CustomerReview.propTypes = {
  rootClassName: string,
  className: string,
};

export default CustomerReview;
