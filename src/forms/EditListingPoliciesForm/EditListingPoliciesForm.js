import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';

import css from './EditListingPoliciesForm.css';

export const EditListingPoliciesFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
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

      const frameLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.frameLabel',
      });
      const framePlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.framePlaceholder',
      });
    
     const forkLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.forkLabel',
      });
      const forkPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.forkPlaceholder',
      });
      
       const drivetrainLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.drivetrainLabel',
      });
      const drivetrainPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.drivetrainPlaceholder',
      });
       const accessoriesLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.accessoriesLabel',
      });
      const accessoriesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.accessoriesPlaceholder',
      });

      const componentsLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.componentsLabel',
      });
      const componentsPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.componentsPlaceholder',
      });
     
     
      const weightLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.weightLabel',
      });
      const weightPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.weightPlaceholder',
      });
      
       const wheelsetLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.wheelsetLabel',
      });
      const wheelsetPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.wheelsetPlaceholder',
      });


      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.updateFailed" />
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
            id="frame"
            name="frame"
            className={css.policy}
            type="text"
            label={frameLabelMessage}
            placeholder={framePlaceholderMessage}
          />
          
           <FieldTextInput
            id="drivetrain"
            name="drivetrain"
            className={css.policy}
            type="text"
            label={drivetrainLabelMessage}
            placeholder={drivetrainPlaceholderMessage}
          />
           <FieldTextInput
            id="accessories"
            name="accessories"
            className={css.policy}
            type="text"
            label={accessoriesLabelMessage}
            placeholder={accessoriesPlaceholderMessage}
          />
           
           <FieldTextInput
            id="components"
            name="components"
            className={css.policy}
            type="text"
            label={componentsLabelMessage}
            placeholder={componentsPlaceholderMessage}
          />
           <FieldTextInput
            id="weight"
            name="weight"
            className={css.policy}
            type="text"
            label={weightLabelMessage}
            placeholder={weightPlaceholderMessage}
          />
           <FieldTextInput
            id="fork"
            name="fork"
            className={css.policy}
            type="text"
            label={forkLabelMessage}
            placeholder={forkPlaceholderMessage}
          />
          
          <FieldTextInput
            id="wheelset"
            name="wheelset"
            className={css.policy}
            type="text"
            label={wheelsetLabelMessage}
            placeholder={wheelsetPlaceholderMessage}
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

EditListingPoliciesFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

const { func, string, bool } = PropTypes;

EditListingPoliciesFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
};

export default compose(injectIntl)(EditListingPoliciesFormComponent);
