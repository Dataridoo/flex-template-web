import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import {  propTypes } from '../../util/types';

import css from './SectionTop.css';
import './SectionTop.css';

import bikerentals from './images/bikerentals.jpg';
import accommodation from './images/accommodation.jpg';
import guidedTours from './images/guidedTours.jpg';
import events from './images/events.jpg';


class SectionTopLinks extends Component {
  render(){ 
   
  return (    
    <div className="container">
      <h1 className={css.highlights}>
       <FormattedMessage id="LandingPagesectionTop.bikeRentalsOurService" />
      </h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card" > 
            <div className={css.imgPadding}>
               <img className="card-img-top" src={bikerentals} alt="landingPage" />
            </div>    
             
              <div className="card-body">
                <h4 className="card-title">
                  <FormattedMessage id="LandingPagesectionTop.bikeRentals" />
                </h4>
                <div className={css.cardText}>
                  <p className="card-text" >
                  <FormattedMessage id="LandingPagesectionTop.bikeRentalsContents" />
                  </p>
                </div>
              
              </div>
            </div>     
          </div>
          <div className="col-md-3">
            <div className="card" >  
              <div className={css.imgPadding}>      
                <img className="card-img-top" src={guidedTours} alt="bhcimage"  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <FormattedMessage id="LandingPagesectionTop.guidedTours" />
                  </h4>
                  <div className={css.cardText}>
                    <p className="card-text" >
                      <FormattedMessage id="LandingPagesectionTop.guidedToursContents" className={css.FormattedMessage}/>
                    </p>
                  </div>
              </div>
            </div>     
          </div>
          <div className="col-md-3">
            <div className="card" >  
              <div className={css.imgPadding}>      
                  <img className="card-img-top" src={events} alt="bhcimage" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <FormattedMessage id="LandingPagesectionTop.events" />
                  </h4>
                  <div className={css.cardText}>
                    <p className="card-text">
                    <FormattedMessage id="LandingPagesectionTop.eventsContent" />
                    </p> 
                  </div>
              </div>
            </div>     
          </div>

        
          <div className="col-md-3">
            <div className="card" >   
              <div className={css.imgPadding}>     
                <img className="card-img-top" src={accommodation} alt="accommodation" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <FormattedMessage id="LandingPagesectionTop.accommodation" />
                  </h4>
                  <div className={css.cardText}>
                    <p className="card-text" >
                      <FormattedMessage id="LandingPagesectionTop.accommodationContents" />
                    </p>
                  </div>
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
