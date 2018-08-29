import React from 'react';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionBikeSize = props => {
  const { options, selectedOptions } = props;
  return (
    <div className={css.sectionBikeSize}>
      <PropertyGroup
        id="ListingPage.bikeSize"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionBikeSize;
