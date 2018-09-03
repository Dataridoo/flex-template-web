import React from 'react';
import { shape, string } from 'prop-types';
import classNames from 'classnames';

import css from './EventsListingPage.css';

const SectionDescription = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData.eventName && publicData.eventDate ? (
    <div className={classes}>
      {publicData.eventName}
      {publicData.eventDate}
    </div>
  ) : null;
};

SectionDescription.defaultProps = { className: null, rootClassName: null };

SectionDescription.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    frame: string,
    fork: string,
    drivetrain: string,
    accessories: string,
    components: string,
    size: string,
    weight: string,
    wheelset: string,
  }).isRequired,
};

export default SectionDescription;

