import React from 'react';
import { shape, string } from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import css from './EventsListingPage.css';


const SectionDescription = props => {
  const { className, rootClassName, publicData, description } = props; 
   const myCustomdate = publicData.eventDate;
   const eventDate = new Date(myCustomdate);  
   const classes = classNames(rootClassName || css.root, className);
  return (
    <span className={classes}>
       {description}
       {eventDate.toLocaleDateString()}
      
    </span>
  )
};


SectionDescription.defaultProps = { className: null, rootClassName: null };

SectionDescription.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    eventDate: string,
   
  }).isRequired,
};

export default SectionDescription;

