import React, { Component } from 'react';
import { string, bool, func} from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import moment from 'moment';
import { required, maxLength, bookingDatesRequired, composeValidators } from '../../util/validators';
import { START_DATE, END_DATE } from '../../util/dates';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput, FieldDateRangeInput} from '../../components';

import css from './EditEventDescriptionForm.css';

const TITLE_MAX_LENGTH = 60;

export class EditEventDescriptionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFocusedInputChange = this.onFocusedInputChange.bind(this);
  }

  // Function that can be passed to nested components
  // so that they can notify this component when the
  // focused input changes.
  onFocusedInputChange(focusedInput) {
    this.setState({ focusedInput });
  }

  // In case start or end date for the booking is missing
  // focus on that input, otherwise continue with the
  // default handleSubmit function.
  handleFormSubmit(e) {
    const { startDate, endDate } = e.bookingDates || {};
    if (!startDate) {
      e.preventDefault();
      this.setState({ focusedInput: START_DATE });
    } else if (!endDate) {
      e.preventDefault();
      this.setState({ focusedInput: END_DATE });
    } else {
      this.props.onSubmit(e);
    }
  }

  render() {
    const { rootClassName, className, price: unitPrice, ...rest } = this.props;
    
    return (
      <FinalForm
        {...rest}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            values,
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
          const { startDate, endDate } = values && values.bookingDates ? values.bookingDates : {};

          const titleMessage = intl.formatMessage({ id: 'EditEventListingDescriptionForm.title' });
          const titlePlaceholderMessage = intl.formatMessage({
            id: 'EditEventListingDescriptionForm.titlePlaceholder',
          });
          const titleRequiredMessage = intl.formatMessage({
            id: 'EditEventListingDescriptionForm.titleRequired',
          });
    
          
      
      const descriptionMessage = intl.formatMessage({
            id: 'EditEventListingDescriptionForm.description',
          });
          const descriptionPlaceholderMessage = intl.formatMessage({
            id: 'EditEventListingDescriptionForm.descriptionPlaceholder',
          });
        
          const descriptionRequiredMessage = intl.formatMessage({
            id: 'EditListingDescriptionForm.descriptionRequired',
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
          
         

          const classes = classNames(css.root, className);
          const submitReady = updated && pristine;
          const submitInProgress = updateInProgress;
          const submitDisabled = invalid || disabled || submitInProgress;
    
          const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
         
         

          return (
            <Form onSubmit={handleSubmit} className={classes}>
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
                className={css.bookingDates}
                name="bookingDates"
                unitType={unitType}
                startDate={startDate}
                endDate={endDate}
                startDateId={`${form}.bookingStartDate`}
                startDateLabel={bookingStartLabel}
                startDatePlaceholderText={startDatePlaceholderText}
                endDateId={`${form}.bookingEndDate`}
                endDateLabel={bookingEndLabel}
                endDatePlaceholderText={endDatePlaceholderText}
                focusedInput={this.state.focusedInput}
                onFocusedInputChange={this.onFocusedInputChange}
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
  }
}
EditEventDescriptionFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
  rootClassName: null,
  className: null,
  price: null,
  isOwnListing: false,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
};
EditEventDescriptionFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,  
  unitType: propTypes.bookingUnitType.isRequired,
  rootClassName: string,
  className: string,
  price: propTypes.money,
  isOwnListing: bool,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};


const EditEventDescriptionForm = compose(injectIntl)(EditEventDescriptionFormComponent);

export default EditEventDescriptionForm;