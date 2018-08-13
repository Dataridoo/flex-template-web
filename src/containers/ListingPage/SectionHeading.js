import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PrimaryButton } from '../../components';

import css from './ListingPage.css';

const SectionHeading = props => {
  const {
    priceTitle,
    formattedPrice,
    richTitle,
    category,
    showContactUser,
    onContactUser,
  } = props;
  return (
    <div className={css.sectionHeading}>
      <div className={css.desktopPriceContainer}>
        <div className={css.desktopPriceValue} title={priceTitle}>
          {formattedPrice} <span className={css.formatedPriceUnit}> <FormattedMessage id="ListingPage.perUnit" /></span>
        </div>       
      </div>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle} &nbsp; <span>   {category}</span> </h1>
        <div className={css.author}>
       
          
          {showContactUser ? (
            <p className={css.contactWrapper}>              
              <PrimaryButton className={css.contactLink} onClick={onContactUser}>
                <FormattedMessage id="ListingPage.contactUser" />
              </PrimaryButton>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
