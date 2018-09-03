import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import moment from 'moment';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput, FieldDateRangeInput} from '../../components';
import { maxLength, required, composeValidators, bookingDatesRequired } from '../../util/validators';

import css from './EditEventDescriptionForm.css';

const TITLE_MAX_LENGTH = 60;

export const EditEventDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        className,
        disabled,
        endDatePlaceholder,
        startDatePlaceholder,
        handleSubmit,
        intl,
        form,
        invalid,
        pristine,
        unitType,
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

      
  
  const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });
    
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });

      const programLabelMessage = intl.formatMessage({
        id: 'EditEventDescriptionForm.description',
      });
      const programPlaceholderMessage = intl.formatMessage({
        id: 'EditEventDescriptionForm.descriptionPlaceholder',
      });
    
      const programRequiredMessage = intl.formatMessage({
        id: 'EditEventDescriptionForm.descriptionRequired',
      });
     
      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditEventProgramForm.updateFailed" />
        </p>
      ) : null;

      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );
       
      const bookingStartLabel = intl.formatMessage({
        id: 'BookingDatesForm.bookingStartTitle',
      });
      const bookingEndLabel = intl.formatMessage({ id: 'BookingDatesForm.bookingEndTitle' });
      const requiredMessage = intl.formatMessage({ id: 'EventDescription.requiredDate' });
      const startDateErrorMessage = intl.formatMessage({
        id: 'FieldDateRangeInput.invalidStartDate',
      });
      const endDateErrorMessage = intl.formatMessage({
        id: 'FieldDateRangeInput.invalidEndDate',
      });

      // This is the place to collect breakdown estimation data. See the
      // EstimatedBreakdownMaybe component to change the calculations
      // for customized payment processes.
      
      

      const dateFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      };

      const now = moment();
      const today = now.startOf('day').toDate();
      const tomorrow = now
        .startOf('day')
        .add(1, 'days')
        .toDate();
      const startDatePlaceholderText =
        startDatePlaceholder || intl.formatDate(today, dateFormatOptions);
      const endDatePlaceholderText =
        endDatePlaceholder || intl.formatDate(tomorrow, dateFormatOptions);
     
     

      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);

     
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
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />
         
          
          <FieldDateRangeInput
            id="eventDate"
            className={css.bookingDates}
            name="eventDate"
            unitType={unitType}
            startDateId={`${form}.bookingStartDate`}
            startDateLabel={bookingStartLabel}
            startDatePlaceholderText={startDatePlaceholderText}
            endDateId={`${form}.bookingEndDate`}
            endDateLabel={bookingEndLabel}
            endDatePlaceholderText={endDatePlaceholderText}
           /*  focusedInput={this.state.focusedInput}
            onFocusedInputChange={this.onFocusedInputChange} */
            format={null}
            useMobileMargins
            validate={composeValidators(
              required(requiredMessage),
              bookingDatesRequired(startDateErrorMessage, endDateErrorMessage)
            )}
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

EditEventDescriptionFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

const { func, string, bool } = PropTypes;

EditEventDescriptionFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,  
  unitType: propTypes.bookingUnitType.isRequired,
};

export default compose(injectIntl)(EditEventDescriptionFormComponent);
