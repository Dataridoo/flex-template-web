import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Reviews } from '../../../components';

import {  propTypes } from '../../../util/types';

import css from './SectionTop.css';

import bhc2 from './images/bhc2.JPG';
import bhc3 from './images/bhc3.JPG';


class SectionTop extends Component {
  render(){ 
    const { reviews} = this.props;
  return (
    <div className={css.PromotionBackground}> 
      <h1 className={css.highlights}>Promotions title</h1> 
      <div className={css.PromotionMargin}> 
<<<<<<< HEAD
        <div className="ui stackable two column grid">
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src={bhc2} alt="bhcimage" className={css.imageWrapper}/>
              </div>
              <div className="content"> 
                <div className="header">
                    <span>
                         <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackage" />
                    </span>
                     <span className="right floated">
                       <span className={css.StartingFrom}>
                            <FormattedMessage id="MerchantPageSectionTop.StartingFrom" />
                        </span>
                    </span>
                </div>
                <div className="description">
                  <span>
                       <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackageDescription" />
                    </span>
                     <span className="right floated">
                      <span className={css.StartingFromCurrency}> <FormattedMessage id="MerchantPageSectionTop.Currency"  /></span>
                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src={bhc3} alt="bhcimage" className={css.imageWrapper}/>
              </div>
              <div className="content"> 
                <div className="header">
                    <span>
                        <FormattedMessage id="MerchantPageSectionTop.BeNeLuxPackage" />
                    </span>
                     <span className="right floated">
                       <span className={css.StartingFrom}>
                            <FormattedMessage id="MerchantPageSectionTop.StartingFrom" />
                        </span>
                    </span>
                </div>
                <div className="description">
                  <span>
                       <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackageDescription" />
                    </span>
                     <span className="right floated">
                      <span className={css.StartingFromCurrency}> <FormattedMessage id="MerchantPageSectionTop.Currency"  /></span>
                    </span>
                </div>
              </div>
            </div>
          </div>       
      </div>  
=======
        <div class="ui stackable two column grid">
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
              <img src={bhc2} alt="bhcimage" className={css.imageWrapper}/>
              </div>
              <div class="content">                
                <h3>
                  <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackage" />
                  <span className={css.StartingFrom}>
                      <FormattedMessage id="MerchantPageSectionTop.StartingFrom" />
                  </span>
                </h3>
                <div className={css.SpecialWeekPackageContent}>
                  <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackageDescription" />
                  <span className={css.StartingFromCurrency}>
                    <FormattedMessage id="MerchantPageSectionTop.Currency" />
                </span>
                </div>               
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img src={bhc3} alt="bhcimage" className={css.imageWrapper}/>
              </div>
              <div class="content">
                  <h3>
                    <FormattedMessage id="MerchantPageSectionTop.BeNeLuxPackage" />
                    <span className={css.StartingFrom}>
                          <FormattedMessage id="MerchantPageSectionTop.StartingFrom" />
                    </span>
                  </h3>
                  <div className={css.SpecialWeekPackageContent}>
                    <FormattedMessage id="MerchantPageSectionTop.SpecialWeekPackageDescription" />
                    <span className={css.StartingFromCurrency}>
                      <FormattedMessage id="MerchantPageSectionTop.Currency" />
                  </span>
                  </div>
                  <Reviews reviews={reviews} />
              </div>
            </div>
          </div>       
      </div>    
        
>>>>>>> 8cf0c81213824515c2f02551a3b18cf344427886
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
