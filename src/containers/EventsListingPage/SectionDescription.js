import React from 'react';
import { shape, string } from 'prop-types';
import classNames from 'classnames';

import css from './EventsListingPage.css';


const SectionDescription = props => {
  const { className, rootClassName, publicData, description } = props; 
   const myCustomdate = publicData.bookingDates;
   const bookingDates = new Date(myCustomdate);  
   const classes = classNames(rootClassName || css.root, className);
  return (
    <span className={classes}>
       {description}
       {bookingDates.toDateString()}
      
    </span>
  )
};


SectionDescription.defaultProps = { className: null, rootClassName: null };

SectionDescription.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    bookingDates: string,
   
  }).isRequired,
};

export default SectionDescription;

