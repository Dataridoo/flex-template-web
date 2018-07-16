import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import PedalWorld_15 from './images/PedalWorld_15.jpg';
import PedalWorld_16 from './images/PedalWorld_16.jpg';
import PedalWorld_17 from './images/PedalWorld_17.jpg';
import PedalWorld_18 from './images/PedalWorld_18.jpg';
import PedalWorld_19 from './images/PedalWorld_19.jpg';

const locationLink = (name, image, searchQuery) => {
   return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
     
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      
      <div className={css.locations}>
        {locationLink(
          '',
          PedalWorld_15
          
        )}
        {locationLink(
          '',
          PedalWorld_16
          
        )}
       
        {locationLink(
          '',
          PedalWorld_17
          
        )}

        {locationLink(
          '',
          PedalWorld_18
          
        )}
        {locationLink(
          '',
          PedalWorld_19
          
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
