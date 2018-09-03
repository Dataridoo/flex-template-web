import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Reviews } from '../../components';

import css from './EventsListingPage.css';

const SectionReviews = props => {
  const { reviews, fetchReviewsError } = props;

  const reviewsError = (
    <h2 className={css.errorText}>
      <FormattedMessage id="ListingPage.reviewsError" />
    </h2>
  );

  return (
    <div className={css.sectionReviews}>
      <h2 className={css.reviewsHeading}>
        <FormattedMessage id="ListingPage.reviewsHeading" values={{ count: reviews.length }} />
        <span className={css.getEmails}>Get emails about new comments</span>
      </h2>
      {fetchReviewsError ? reviewsError : null}
      <Reviews reviews={reviews} />
    </div>
  );
};

export default SectionReviews;
