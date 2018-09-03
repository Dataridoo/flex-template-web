import React from 'react';
import { shape, string } from 'prop-types';
import classNames from 'classnames';

import css from './SectionEventProgram.css';

const SectionEventProgram = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData.program  ? (
    <div className={classes}>
      {publicData.program}
    </div>
  ) : null;
};

SectionEventProgram.defaultProps = { className: null, rootClassName: null };

SectionEventProgram.propTypes = {
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

export default SectionEventProgram;
