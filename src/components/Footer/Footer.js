import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  ExternalLink,
  NamedLink,
} from '../../components';

import facebook from './Images/facebook.jpg';
import camera from './Images/camera.jpg';
import youtube from './Images/youtube.jpg';
import twitter from './Images/twitter.jpg';


import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });  
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
    <img src={facebook} alt=""/>
     
    </ExternalLink>
  ) : null;

  const youtubeLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToYoutube"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
    <img src={youtube} alt=""/>
    </ExternalLink>
  ) : null;
  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
    <img src={twitter} alt=""/>
    </ExternalLink>
  ) : null;
  const cameraLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToCamera"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
    <img src={camera} alt=""/>
    </ExternalLink>
  ) : null;


  return [fbLink, twitterLink, youtubeLink, cameraLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="AboutPage" className={css.link}>
                <FormattedMessage id="Footer.toAboutPage" />
              </NamedLink>
              <div className={css.organizationInfo}>                
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                  <FormattedMessage id="Footer.privacyPolicy" />
                </NamedLink>
                </li>                
              </ul>
            </div>
            <div className={css.infoLinks}>
            <ul className={css.list}>
              <li className={css.listItem}>
              <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                <FormattedMessage id="Footer.termsOfUse" />
              </NamedLink>
              </li>                
            </ul>
          </div>
          <div className={css.infoLinks}>
            <ul className={css.list}>
              <li className={css.listItem}>
              <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
              <FormattedMessage id="Footer.privacyPolicy" />
            </NamedLink>
              </li>                
            </ul>
          </div>
          <div className={css.infoLinks}>
            <ul className={css.list}>
              <li className={css.listItem}>
                 {socialMediaLinks}
              </li>                
            </ul>
          </div>          
           
        </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
