import React from 'react';
import PropTypes from 'prop-types';


import { NamedLink} from '../../../components';
import css from './SectionCenter.css';

import ImageOne from './images/bhc4.jpg';
import ImageTwo from './images/bhc5.jpg';
import ImageThree from './images/bhc6.jpg';
import ImageFour from './images/bhc7.jpg';


const bikeRentals = (
  <div className={css.imageWrapper}>
    <NamedLink name="RentalsListPage">
      <img src={ImageOne} alt="bhc image"/> 
    </NamedLink>
  </div>
)

const guidedTourPage = (
  <div className={css.imageWrapper}>
    <NamedLink name="GuidedToursPage">
      <img src={ImageTwo} alt="bhc image"/>  
    </NamedLink>
  </div>
)


const eventsPage = (
  <div className={css.imageWrapper}>
    <NamedLink name="EventsPage">
     <img src={ImageFour} alt="bhc image"/> 
    </NamedLink>
  </div>
)

const accomodationPage = (
  <div className={css.imageWrapper}>
    <NamedLink name="EventsPage">
      <img src={ImageThree} alt="bhc image"/>   
    </NamedLink>
  </div>
)

const SectionCenter = () => {
  return (
    <div className={css.PromotionBackground}>     
      <div className={css.PromotionMargin}>     
        <div className="ui stackable grid">      
          <div className="ui four wide column">
            <div className={css.PromotionImagePaddingLeft} >
              {bikeRentals}             
            </div>
          </div>
          <div className="ui four wide column">
            <div className={css.PromotionImagePaddingLeft} >
                {guidedTourPage}    
            </div>
          </div>  
          <div className="ui four wide column">
            <div className={css.PromotionImagePaddingLeft} >
                {accomodationPage}   
            </div>
          </div>  
          <div className="ui four wide column">
            <div className={css.PromotionImagePaddingLeft} >
              {eventsPage}       
            </div>
          </div>        
        </div>
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
