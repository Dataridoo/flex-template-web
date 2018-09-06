import React from 'react';
import { bool, oneOfType, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { LISTING_STATE_PENDING_APPROVAL, LISTING_STATE_CLOSED, propTypes } from '../../util/types';
import { NamedLink } from '../../components';
import EditIcon from './EditIcon';

import css from './EventsListingPage.css';

export const ActionBarMaybe = props => {
  const { isOwnListing, listing, editParams } = props;
  const state = listing.attributes.state;
  const isPendingApproval = state === LISTING_STATE_PENDING_APPROVAL;
  const isClosed = state === LISTING_STATE_CLOSED;

  if (isOwnListing) {
    let ownListingTextTranslationId = 'EventsListingPage.ownListing';

    if (isPendingApproval) {
      ownListingTextTranslationId = 'EventsListingPage.ownListingPendingApproval';
    } else if (isClosed) {
      ownListingTextTranslationId = 'EventsListingPage.ownClosedListing';
    }
/* 
    const ownListingTextClasses = classNames(css.ownListingText, {
      [css.ownListingTextPendingApproval]: isPendingApproval,
    });
 */
    return (
      <div className={css.actionBar}>       
        <NamedLink className={css.editListingLink} name="EditEventsPage" params={editParams}>
          <EditIcon className={css.editIcon} />
          <FormattedMessage id="ListingPage.editListing" />
        </NamedLink>
      </div>
    );
  } else if (isClosed) {
    return (
      <div className={css.actionBar}>
        <p className={css.closedListingText}>
          <FormattedMessage id="ListingPage.closedListing" />
        </p>
      </div>
    );
  }
  return null;
};

ActionBarMaybe.propTypes = {
  isOwnListing: bool.isRequired,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]).isRequired,
  editParams: object.isRequired,
};

ActionBarMaybe.displayName = 'ActionBarMaybe';

export default ActionBarMaybe;
