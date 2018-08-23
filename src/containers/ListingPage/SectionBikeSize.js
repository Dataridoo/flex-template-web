import React from 'react';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionBikeSize = props => {
<<<<<<< HEAD
  const { options, handleSelectOptions } = props;
=======
  const { options, handleSelectBikeSizeOptions } = props;
>>>>>>> 8cf0c81213824515c2f02551a3b18cf344427886
  return (
    <div className={css.sectionBikeSize}>
      <PropertyGroup
        id="ListingPage.bikeSize"
        options={options}
<<<<<<< HEAD
        selectedOptions={handleSelectOptions}
=======
        selectedOptions={handleSelectBikeSizeOptions}
>>>>>>> 8cf0c81213824515c2f02551a3b18cf344427886
        twoColumns={true}
      />
    </div>
  );
};

export default SectionBikeSize;
