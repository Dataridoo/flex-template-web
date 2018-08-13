import React from 'react';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionFineSetUp = props => {
  const { options, selectedOptions } = props;
  return (
    <div className={css.sectionFeatures}>
      
      <PropertyGroup
        id="ListingPage.fineSetUp"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionFineSetUp;
