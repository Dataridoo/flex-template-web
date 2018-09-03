import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PrimaryButton } from '../../components';

import css from './EventsListingPage.css';

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
    <div >
      <div >
         {richTitle} 
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
