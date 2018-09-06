import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import {  propTypes } from '../../../util/types';
import ReviewRating from './ReviewRating';

import css from './SectionTop.css';

import bhc2 from './images/bhc2.jpg';
import bhc3 from './images/bhc3.jpg';


class SectionTop extends Component {
  render(){ 
  return (   
    <div className="container" > 
          <div className={css.PromotionBackground}>        
            <h1 className={css.highlights}>Promotions title</h1> 
          <div className="row" >  
            <div className="col-md-6">
            <div className={css.colMarginBottom}>             
              <div className="card" >        
                <img className="card-img-top" src={bhc2} alt="bhcimage" style={{ display: 'block',  maxWidth: '100%', width:'100%',   height: 'auto'}}/>
                <div className={css.cardBody}>
                  <div className="card-body" >
                    <h4 className="card-title">                   
                      <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackage" /> 
                      <span className={css.StartingFrom}>
                          <FormattedMessage id="MerchantPageSectionTop.StartingFrom" />
                        </span>
                    </h4>
                      <div className="card-text">                    
                        <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackageDescription" />
                        <span className={css.StartingFromCurrency}>
                          <FormattedMessage id="MerchantPageSectionTop.Currency"  />
                        </span>
                      </div> 
                      <ReviewRating />             
                    </div>
                  </div>
                </div>     
              </div>
              </div>
              <div className="col-md-6">
              <div className={css.colMarginBottom}>      
                <div className="card" >        
                  <img className="card-img-top" src={bhc3} alt="bhcimage" style={{ display: 'block',  maxWidth: '100%', width:'100%',   height: 'auto'}}/>
                  <div className={css.cardBody}>
                    <div className="card-body" >
                      <h4 className="card-title">
                          <FormattedMessage id="MerchantPageSectionTop.BeNeLuxPackage" />
                        <span className={css.StartingFrom}>
                          <FormattedMessage id="MerchantPageSectionTop.StartingFrom" />
                        </span>
                      </h4>
                      <div className="card-text" >
                          <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackageDescription" />
                          <span className={css.StartingFromCurrency}>
                              <FormattedMessage id="MerchantPageSectionTop.Currency"  />
                          </span>
                      </div> 
                        <ReviewRating />                
                    </div>
                  </div>
                </div>     
              </div>
              </div>
          </div>
      </div>
    </div>
  );
};
}

SectionTop.defaultProps = { 
  rootClassName: null, 
  className: null,
  reviews: [],
 };

const { string, arrayOf} = PropTypes;

SectionTop.propTypes = {
  rootClassName: string,
  className: string,
  reviews: arrayOf(propTypes.review),
};

export default SectionTop;
