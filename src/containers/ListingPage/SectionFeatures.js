import React from 'react';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionFeatures = props => {
  const { options, selectedOptions } = props;
  return (
    <div className={css.sectionFeatures}>
      
      <PropertyGroup
        id="ListingPage.amenities"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionFeatures;
