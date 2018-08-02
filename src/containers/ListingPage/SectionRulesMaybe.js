import React from 'react';
import { shape, string } from 'prop-types';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionRulesMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData.frame && publicData.fork && publicData.drivetrain && publicData.components && publicData.accessories && publicData.wheelset && publicData.size && publicData.weight ? (
    <div className={classes}>
      <p className={css.rules}><strong>Frame: </strong>{publicData.frame}</p>
      <p className={css.rules}><strong>Fork: </strong>{publicData.fork}</p>
      <p className={css.rules}><strong>Drivetrain: </strong>{publicData.drivetrain}</p>
      <p className={css.rules}><strong>Components: </strong>{publicData.components}</p>
      <p className={css.rules}><strong>wheelset: </strong>{publicData.wheelset}</p>
      <p className={css.rules}><strong>Accessories: </strong>{publicData.accessories}</p>
      <p className={css.rules}><strong>Size: </strong>{publicData.size}</p>
      <p className={css.rules}><strong>Weight: </strong>{publicData.weight}</p>
    </div>
  ) : null;
};

SectionRulesMaybe.defaultProps = { className: null, rootClassName: null };

SectionRulesMaybe.propTypes = {
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

export default SectionRulesMaybe;
