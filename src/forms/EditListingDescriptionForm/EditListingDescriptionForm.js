import React from 'react';
import { bool, func, string, arrayOf, shape } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput } from '../../components';
import CustomCategorySelectFieldMaybe from './CustomCategorySelectFieldMaybe';

import css from './EditListingDescriptionForm.css';

const TITLE_MAX_LENGTH = 60;

const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        categories,
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
      } = fieldRenderProps;

      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });

      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );
  
      
      const frameMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.frame',
      });
      const framePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.framePlaceholder',
      });     
      const frameRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.frameRequired',
      });

      

      const forkMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.fork',
      });
      const forkPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.forkPlaceholder',
      });     
      const forkRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.forkRequired',
      });

      const drivetrainMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.drivetrain',
      });
      const drivetrainPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.drivetrainPlaceholder',
      });     
      const drivetrainRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.drivetrainRequired',
      });

      const sizeMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.size',
      });
      const sizePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.sizePlaceholder',
      });     
      const sizeRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.sizeRequired',
      });

      const weightMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.weight',
      });
      const weightPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.weightPlaceholder',
      });     
      const weightRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.weightRequired',
      });

      const accessoriesMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.accessories',
      });
      const accessoriesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.accessoriesPlaceholder',
      });     
      const accessoriesRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.accessoriesRequired',
      });

      const wheelsetMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.wheelset',
      });
      const wheelsetPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.wheelsetPlaceholder',
      });     
      const wheelsetRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.wheelsetRequired',
      });

      const componentsMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.components',
      });
      const componentsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.componentsPlaceholder',
      });     
      const componentsRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.componentsRequired',
      });

      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);

      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
          />

         
          
          <FieldTextInput
            id="frame"
            name="frame"
            className={css.title}
            type="text"
            label={frameMessage}
            placeholder={framePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(frameRequiredMessage), maxLength60Message)}
          />

          <FieldTextInput
            id="fork"
            name="fork"
            className={css.title}
            type="text"
            label={forkMessage}
            placeholder={forkPlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(forkRequiredMessage), maxLength60Message)}
          />

          <FieldTextInput
            id="drivetrain"
            name="drivetrain"
            className={css.description}
            type="textarea"
            label={drivetrainMessage}
            placeholder={drivetrainPlaceholderMessage}            
            validate={composeValidators(required(drivetrainRequiredMessage))}
          />

          <FieldTextInput
            id="components"
            name="components"
            className={css.description}
            type="textarea"
            label={componentsMessage}
            placeholder={componentsPlaceholderMessage}                  
            validate={composeValidators(required(componentsRequiredMessage))}
          />

          
          
        <FieldTextInput
          id="wheelset"
          name="wheelset"
          className={css.title}
          type="text"
          label={wheelsetMessage}
          placeholder={wheelsetPlaceholderMessage}
          maxLength={TITLE_MAX_LENGTH}
          validate={composeValidators(required(wheelsetRequiredMessage), maxLength60Message)}
        />

      <FieldTextInput
        id="accessories"
        name="accessories"
        className={css.title}
        type="text"
        label={accessoriesMessage}
        placeholder={accessoriesPlaceholderMessage}
        maxLength={TITLE_MAX_LENGTH}
        validate={composeValidators(required(accessoriesRequiredMessage), maxLength60Message)}
        />


      <FieldTextInput
        id="size"
        name="size"
        className={css.title}
        type="text"
        label={sizeMessage}
        placeholder={sizePlaceholderMessage}
        maxLength={TITLE_MAX_LENGTH}
        validate={composeValidators(required(sizeRequiredMessage), maxLength60Message)}
      />

      <FieldTextInput
        id="weight"
        name="weight"
        className={css.title}
        type="text"
        label={weightMessage}
        placeholder={weightPlaceholderMessage}
        maxLength={TITLE_MAX_LENGTH}
        validate={composeValidators(required(weightRequiredMessage), maxLength60Message)}
      />
      

      <CustomCategorySelectFieldMaybe
        id="category"
        name="category"
        categories={categories}
        intl={intl}
      />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDescriptionFormComponent.defaultProps = { className: null, updateError: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
