import React from 'react';
import PropTypes from 'prop-types';


import config from '../../config';
import LogoImage from './pedalworld-logo.jpg';

const Logo = props => {
  const { className, format, ...rest } = props;
  

  if (format === 'desktop') {
    return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
  }

  //return <IconLogo className={mobileClasses} {...rest} />;
  return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
