import React from 'react';
import { PropertyGroup } from '../../components';

const SectionEventType = props => {
  const { options, selectedOptions } = props;
  return (
    <span >      
      <PropertyGroup
        id="ListingPage.eventType"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </span>
  );
};

export default SectionEventType;
