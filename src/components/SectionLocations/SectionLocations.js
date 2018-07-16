import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import PedalWorld_2 from './images/PedalWorld_2.jpg';
import PedalWorld_3 from './images/PedalWorld_3.jpg';
import PedalWorld_4 from './images/PedalWorld_4.jpg';

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
          PedalWorld_2
          
        )}
        {locationLink(
          '',
          PedalWorld_3,
          
        )}
       
        {locationLink(
          '',
          PedalWorld_4,
          
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
