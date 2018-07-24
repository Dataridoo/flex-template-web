import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { 
  NamedLink,
  LatestAdditions,
  CustomerReview
 } from '../../components';

import css from './SectionReviewAndAdditions.css';


const locationLink = (name, image) => {
  return (
    <div className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
    </div>
  );
};

const SectionReviewAndAdditions = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      
      <div className={css.locations}>
        {locationLink(
          '',
         <div className={css.bgcblue}> <LatestAdditions /></div>
          
        )}
        {locationLink(
          '',
          <div className={css.bgcskyblue}> <CustomerReview /></div>
         
          
        )}
       
      </div>
    </div>
  );
};

SectionReviewAndAdditions.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionReviewAndAdditions.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionReviewAndAdditions;
