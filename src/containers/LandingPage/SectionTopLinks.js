import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Reviews } from '../../components';

import {  propTypes } from '../../util/types';

import css from './SectionTop.css';

import bikerentals from './images/bikerentals.jpg';
import accommodation from './images/accommodation.jpg';
import guidedTours from './images/guidedTours.jpg';
import events from './images/events.jpg';



class SectionTopLinks extends Component {
  render(){ 
    const { reviews} = this.props;
  return (
    <div className={css.PromotionBackground}> 
      <h1 className={css.highlights}>
       <FormattedMessage id="LandingPagesectionTop.bikeRentalsOurService" />
      </h1>       
      <div className="ui stackable four column grid">
        <div className="column">
            <img className="ui fluid small image" src={bikerentals} alt="bhcimage" />
            <div className={css.thumbnailContent}> 
              <div className={css.thumbnailHeader}>
                  <FormattedMessage id="LandingPagesectionTop.bikeRentals" />
              </div>
              <div className={css.thumbnailDescription}>
                <FormattedMessage id="LandingPagesectionTop.bikeRentalsContents" />
              </div>
            </div>
        </div>
        <div className="column">
          <img className="ui fluid small image" src={guidedTours} alt="bhcimage" />
          <div className={css.thumbnailContent}> 
              <div className={css.thumbnailHeader}>
                <FormattedMessage id="LandingPagesectionTop.guidedTours" />
              </div>
              <div className={css.thumbnailDescription}>
              <FormattedMessage id="LandingPagesectionTop.guidedToursContents" />
              </div>
            </div>
        </div>         
        <div className="column">
          <img className="ui fluid small image" src={events} alt="bhcimage" />
          <div className={css.thumbnailContent}> 
            <div className={css.thumbnailHeader}>
                <FormattedMessage id="LandingPagesectionTop.events" />
            </div>
            <div className={css.thumbnailDescription}>
              <FormattedMessage id="LandingPagesectionTop.eventsContent" />
            </div>
          </div>
        </div>
        <div className="column">
          <img className="ui fluid small image" src={accommodation} alt="bhcimage" />
          <div className={css.thumbnailContent}> 
              <div className={css.thumbnailHeader}>
              <FormattedMessage id="LandingPagesectionTop.accommodation" />
            </div>
            <div className={css.thumbnailDescription}>
              <FormattedMessage id="LandingPagesectionTop.accommodationContents" />
            </div>
          </div>
      </div>
      </div> 
    </div>
  );
};
}

SectionTopLinks.defaultProps = { 
  rootClassName: null, 
  className: null,
  reviews: [],
 };

const { string, arrayOf} = PropTypes;

SectionTopLinks.propTypes = {
  rootClassName: string,
  className: string,
  reviews: arrayOf(propTypes.review),
};

export default SectionTopLinks;
