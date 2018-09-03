import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput} from '../../components';
import { required, composeValidators } from '../../util/validators';

import css from './EditEventProgramForm.css';

export const EditEventProgramFormComponent = props => (
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
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
      } = fieldRenderProps;

      const programLabelMessage = intl.formatMessage({
        id: 'EditEventProgramForm.programLabel',
      });
      const programPlaceholderMessage = intl.formatMessage({
        id: 'EditEventProgramForm.programPlaceholder',
      });
    
      const programRequiredMessage = intl.formatMessage({
        id: 'EditEventDescriptionForm.descriptionRequired',
      });
     
      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditEventProgramForm.updateFailed" />
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
            id="program"
            name="program"
            className={css.description}
            type="textarea"
            label={programLabelMessage}
            placeholder={programPlaceholderMessage}
            validate={composeValidators(required(programRequiredMessage))}
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

EditEventProgramFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

const { func, string, bool } = PropTypes;

EditEventProgramFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
};

export default compose(injectIntl)(EditEventProgramFormComponent);
