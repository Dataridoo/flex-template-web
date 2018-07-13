import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionLocationCenter.css';

import ImageOne from './images/ImageOne.jpg';
import ImageTwo from './images/ImageTwo.jpg';
import ImageThree from './images/ImageThree.jpg';
import ImageFour from './images/ImageFour.jpg';


const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
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

const SectionLocationCenter = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      
      <div className={css.locations}>
        {locationLink(
          '',
          ImageOne
          
        )}
        {locationLink(
          '',
          ImageTwo
          
        )}
       
        {locationLink(
          '',
          ImageThree
          
        )}

        {locationLink(
          '',
          ImageFour
          
        )}
        
      </div>
    </div>
  );
};

SectionLocationCenter.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocationCenter.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocationCenter;
