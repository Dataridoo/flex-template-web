import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import routeConfiguration from '../../routeConfiguration';
import { ensureListing } from '../../util/data';
import { createResourceLocatorString } from '../../util/routes';
import {
  EditEventDescriptionPanel,
  EditEventTypePanel, 
  EditEventProgramPanel, 
  EditListingPhotosEventPanel,
} from '../../components';

import css from './EditEventListingWizard.css';

export const DESCRIPTION = 'description';
export const PROGRAM ='program';
export const PHOTOS = 'photos';
export const FEATURES = 'features';

// EditListingWizardTab component supports these tabs
export const SUPPORTED_TABS = [DESCRIPTION,  PROGRAM, FEATURES, PHOTOS];

const pathParamsToNextTab = (params, tab, marketplaceTabs) => {
  const nextTabIndex = marketplaceTabs.findIndex(s => s === tab) + 1;
  const nextTab =
    nextTabIndex < marketplaceTabs.length
      ? marketplaceTabs[nextTabIndex]
      : marketplaceTabs[marketplaceTabs.length - 1];
  return { ...params, tab: nextTab };
};

const EditEventListingWizardTab = props => {
  const {
    tab,
    marketplaceTabs,
    params,
    errors,
    fetchInProgress,
    newListingCreated,
    history,
    images,
    listing,
    handleCreateFlowTabScrolling,
    handleCreateListing,
    onUpdateListing,
    onCreateListingDraft,
    onImageUpload,
    onUpdateImageOrder,
    onRemoveImage,
    onUpdateListingDraft,
    onChange,
    updatedTab,
    updateInProgress,
    intl,
  } = props;

  const isNew = params.type === 'new';
  const currentListing = ensureListing(listing);
  const imageIds = images => {
    return images ? images.map(img => img.imageId || img.id) : null;
  };

  const onCompleteEditListingWizardTab = (tab, updateValues) => {
    if (isNew) {
      const onUpsertListingDraft =
        tab !== marketplaceTabs[0] ? onUpdateListingDraft : onCreateListingDraft;
      onUpsertListingDraft(updateValues);

      if (tab !== marketplaceTabs[marketplaceTabs.length - 1]) {
        // Create listing flow: smooth scrolling polyfill to scroll to correct tab
        handleCreateFlowTabScrolling(false);
        // Redirect to next tab
        const pathParams = pathParamsToNextTab(params, tab, marketplaceTabs);
        history.push(
          createResourceLocatorString('EditEventsPage', routeConfiguration(), pathParams, {})
        );
      } else {
        // Normalize images for API call
        const imageIdArray = imageIds(updateValues.images);
        handleCreateListing({ ...listing.attributes, images: imageIdArray });
      }
    } else {
      const { images: updatedImages, ...rest } = updateValues;
      // Normalize images for API call
      const imageProperty =
        typeof updatedImages !== 'undefined' ? { images: imageIds(updatedImages) } : {};
      onUpdateListing(tab, { ...rest, id: currentListing.id, ...imageProperty });
    }
  };

  const panelProps = tab => {
    return {
      className: css.panel,
      errors,
      listing,
      onChange,
      panelUpdated: updatedTab === tab,
      updateInProgress,
    };
  };

  switch (tab) {
    case DESCRIPTION: {
      const submitButtonTranslationKey = isNew
        ? 'EditEventListingWizard.saveNewDescription'
        : 'EditEventListingWizard.saveEditDescription';
      return (
        <EditEventDescriptionPanel
          {...panelProps(DESCRIPTION)}
          submitButtonText={intl.formatMessage({ id: submitButtonTranslationKey })}
          onSubmit={values => {
            onCompleteEditListingWizardTab(tab, values);
          }}
        />
      );
    }
   
    case FEATURES: {
      const submitButtonTranslationKey = isNew
        ? 'EditEventListingWizard.saveNewFeatures'
        : 'EditEventListingWizard.saveEditFeatures';
      return (
        <EditEventTypePanel
          {...panelProps(FEATURES)}
          submitButtonText={intl.formatMessage({ id: submitButtonTranslationKey })}
          onSubmit={values => {
            onCompleteEditListingWizardTab(tab, values);
          }}
        />
      );
    }

   
    case PROGRAM: {
      const submitButtonTranslationKey = isNew
        ? 'EditEventListingWizard.saveNewProgram'
        : 'EditListingWizard.saveEditProgram';
      return (
        <EditEventProgramPanel
          {...panelProps(PROGRAM)}
          submitButtonText={intl.formatMessage({ id: submitButtonTranslationKey })}
          onSubmit={values => {
            onCompleteEditListingWizardTab(tab, values);
          }}
        />
      );
    }
   
        
    case PHOTOS: {
      const submitButtonTranslationKey = isNew
        ? 'EditEventListingWizard.saveNewPhotos'
        : 'EditListingWizard.saveEditPhotos';

      // newListingCreated and fetchInProgress are flags for the last wizard tab
      return (
        <EditListingPhotosEventPanel
          {...panelProps(PHOTOS)}
          submitButtonText={intl.formatMessage({ id: submitButtonTranslationKey })}
          newListingCreated={newListingCreated}
          fetchInProgress={fetchInProgress}
          images={images}
          onImageUpload={onImageUpload}
          onRemoveImage={onRemoveImage}
          onSubmit={values => {
            onCompleteEditListingWizardTab(tab, values);
          }}
          onUpdateImageOrder={onUpdateImageOrder}
        />
      );
    }
    default:
      return null;
  }
};

EditEventListingWizardTab.defaultProps = {
  errors: null,
  listing: null,
  updatedTab: null,
};

const { array, bool, func, object, oneOf, shape, string } = PropTypes;

EditEventListingWizardTab.propTypes = {
  params: shape({
    id: string.isRequired,
    slug: string.isRequired,
    type: oneOf(['new', 'edit']).isRequired,
    tab: oneOf(SUPPORTED_TABS).isRequired,
  }).isRequired,
  errors: shape({
    createListingsError: object,
    updateListingError: object,
    showListingsError: object,
    uploadImageError: object,
  }).isRequired,
  fetchInProgress: bool.isRequired,
  newListingCreated: bool.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
  images: array.isRequired,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: shape({
    attributes: shape({
      publicData: object,
      geolocation: object,
      pricing: object,
      title: string,
    
    }),
    images: array,
  }),

  handleCreateFlowTabScrolling: func.isRequired,
  handleCreateListing: func.isRequired,
  onUpdateListing: func.isRequired,
  onCreateListingDraft: func.isRequired,
  onImageUpload: func.isRequired,
  onUpdateImageOrder: func.isRequired,
  onRemoveImage: func.isRequired,
  onUpdateListingDraft: func.isRequired,
  onChange: func.isRequired,
  updatedTab: string,
  updateInProgress: bool.isRequired,

  intl: intlShape.isRequired,
};

export default EditEventListingWizardTab;
