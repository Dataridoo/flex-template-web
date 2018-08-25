import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingPoliciesForm } from '../../forms';

import css from './EditListingBikeSpecificationsPanel.css';

const EditListingBikeSpecificationsPanel = props => {
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
  const { publicData } = currentListing.attributes;

  const panelTitle = currentListing.id ? (
    <FormattedMessage
      id="EditListingBikeSpecificationsPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingBikeSpecificationsPanel.createListingTitle" />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingPoliciesForm
        className={css.form}
        publicData={publicData}
        initialValues={{ 
                      frame: publicData.frame, 
                      fork: publicData.fork, 
                      drivetrain: publicData.drivetrain, 
                      components: publicData.components, 
                      accessories: publicData.accessories,
                      weight: publicData.weight,
                       wheelset: publicData.wheelset,
                }}
        onSubmit={values => {
          const { frame = '', fork = '', weight = '', components = '', drivetrain = '', accessories = '', wheelset = '' } = values;
          const updateValues = {
            publicData: {
              frame,
              fork,
              weight,
              components,
              accessories,
              drivetrain,
              wheelset
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingBikeSpecificationsPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingBikeSpecificationsPanel.propTypes = {
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

export default EditListingBikeSpecificationsPanel;
