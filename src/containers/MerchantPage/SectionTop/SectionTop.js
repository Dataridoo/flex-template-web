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
        <div className="ui stackable grid">      
          <div className="ui eight wide column">
            <div className={css.imageWrapper}>           
              <img src={bhc2} alt="bhc image"/>
              <div className={css.PromotionContent}>
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
          <div className="ui eight wide column">
            <div className={css.imageWrapper}>  
              <img src={bhc3} alt="bhc image"/>
              <div className={css.PromotionContent}>
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
