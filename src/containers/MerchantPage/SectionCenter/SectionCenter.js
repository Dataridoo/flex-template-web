import React from 'react';
import PropTypes from 'prop-types';


import { NamedLink} from '../../../components';
import css from './SectionCenter.css';

import ImageOne from './images/bhc4.jpg';
import ImageTwo from './images/bhc5.jpg';
import ImageThree from './images/bhc6.jpg';
import ImageFour from './images/bhc7.jpg';

const bikeRentals = (name, image, searchQuery) => {
  return (
    <NamedLink name="RentalsListPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
     
    </NamedLink>
  );
};


const guidedTourPage = (name, image, searchQuery) => {
  return (
    <NamedLink name="GuidedToursPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
     
    </NamedLink>
  );
};

const eventsPage = (name, image, searchQuery) => {
  return (
    <NamedLink name="EventsPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
     
    </NamedLink>
  );
};


const accomodationPage = (name, image, searchQuery) => {
  return (
    <NamedLink name="EventsPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
     
    </NamedLink>
  );
};

const SectionCenter = () => {
  
  return (
    <div className={css.PromotionMargin}>
      
      <div className={css.locations}>
        {bikeRentals(
          '',
          ImageOne
          
        )}
        {guidedTourPage(
          '',
          ImageTwo,
          
        )}
       
        {eventsPage(
          '',
          ImageThree,
          
        )}
        {accomodationPage(
          '',
          ImageFour,
          
        )}
      </div>
    </div>
  );
};

SectionCenter.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCenter.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCenter;
