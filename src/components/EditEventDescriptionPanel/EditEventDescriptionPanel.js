import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditEventDescriptionForm } from '../../forms';

import css from './EditEventDescriptionPanel.css';

const EditEventDescriptionPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { title, description, publicData } = currentListing.attributes;
 
  const panelTitle = currentListing.id ? (
    <FormattedMessage
      id="EditEventDescriptionPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditEventDescriptionPanel.createListingTitle" />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditEventDescriptionForm
        className={css.form}
        initialValues={{ description, title, eventDate:publicData }}
        saveActionMsg={submitButtonText}
        
        onSubmit={values => {
          let date = new Date();
          publicData.customDate = date.getTime();
          const { description, title} = values;
          const updateValues = {
            title: title.trim(),
            description,
            publicData: {eventDate: publicData.customDate}
          
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}       
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditEventDescriptionPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditEventDescriptionPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditEventDescriptionPanel;
