import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { EditListingPhotosForm } from '../../forms';
import {
  AddImages,
  Avatar,
  ExpandingTextarea,
  
  ExternalLink,
  FieldBirthdayInput,
  FieldBoolean,
  IconSearch,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldCurrencyInput,
  FieldPhoneNumberInput,
  FieldReviewRating,
  FieldSelect,
  Button,
  FieldDateRangeInput,
  
  IconBannedUser,
  IconCheckmark,
  IconClose,
  IconEmailAttention,
  IconKeys,
  IconReviewStar,
  IconReviewUser,
  IconSpinner,
  
  SectionThumbnailLinks,
  ListingLink,
 
  MapPanel,
  MenuContent,
  MenuItem,
  MenuLabel,
  
  OrderDiscussionPanel,
} from '../../components';

import css from './RentalsListView.css';


const RentalsListView = props => {
  
  return (
    <div >
       <ExpandingTextarea />    
      <FieldCheckbox />
     <FieldDateRangeInput />
     
     <ExternalLink />
     <FieldBirthdayInput />
     <FieldBoolean />
     <Button />
     <IconSearch />
     <FieldReviewRating />
     <FieldSelect /> 
    
    <AddImages />
     <Avatar />
    <IconBannedUser />
    <IconCheckmark />
    <IconClose />
   <IconEmailAttention />
   <IconKeys />
    <IconReviewStar />
    <IconReviewUser />
    <IconSpinner />
   
   <ListingLink />
  
   
   <MapPanel />
   <MenuContent />
    <MenuItem />
   <MenuLabel />
   
    <OrderDiscussionPanel />
    </div>
  );
};

const { string } = PropTypes;

RentalsListView.propTypes = {
  rootClassName: string,
  className: string,
};

export default RentalsListView;
