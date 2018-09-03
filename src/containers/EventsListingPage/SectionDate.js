import React from 'react';
import { PropertyGroup } from '../../components';

import css from './EventsListingPage.css';

const SectionDate = props => {
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

export default SectionDate;
