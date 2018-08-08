import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { twitterPageURL} from '../../util/urlHelpers';
import config from '../../config';
import {
  ExternalLink,
  NamedLink,
  IconSocialMediaFacebook,
   IconSocialMediaInstagram,
   IconSocialMediaTwitter
} from '../../components';

import youtube from './Images/youtube.jpg';
import logo from './Images/logo.png';

import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteTwitterHandle, siteInstagramPage, siteYoutubePage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });  
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToYoutube = intl.formatMessage({ id: 'Footer.goToYoutube' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
    
      <IconSocialMediaFacebook  className={css.IconCenter} />
    </ExternalLink>
  ) : null;

 
  const youtubeLink = siteYoutubePage ? (
    <ExternalLink
      key="linkToYoutube"
      href={siteYoutubePage}
      className={css.icon}
      title={goToYoutube}
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
     <IconSocialMediaTwitter className={css.IconCenter}/>
    </ExternalLink>
  ) : null;
  
  const instagramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
     <IconSocialMediaInstagram  className={css.IconCenterInsta}/>
    </ExternalLink>
  ) : null;


  return [fbLink, twitterLink, youtubeLink, instagramLink].filter(v => v != null);
};


const Footer = props => {
  const {intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  

  return (
    //<div className={classes}>
     <div className={css.footerBackground}>
     <div class="ui stackable grid">
        <div class="two wide column">
          <div className={css.infoLinks}>
            <NamedLink name="AboutPage" className={css.link}>
                <FormattedMessage id="Footer.toAboutPage" />
             </NamedLink> 
          </div>
        </div>
        
        <div class="two wide column">
          <div className={css.infoLinks}>
             <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                <FormattedMessage id="Footer.privacyPolicy" />
              </NamedLink>
          </div>
        </div>
        
        <div class="two wide column">
          <div className={css.infoLinks}>
             <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                <FormattedMessage id="Footer.termsOfUse" />
              </NamedLink>
          </div>
        </div>
        
        <div class="two wide column">
          <div className={css.infoLinks}>
             <NamedLink name="ContactUsPage" className={css.legalLink}>
                <FormattedMessage id="Footer.toContactUsPage" />
              </NamedLink>
          </div>
        </div>
        
        <div class="two wide column">
          <div className={css.infoLinks}>
             <NamedLink name="LandingPage" className={css.legalLink}>
                <img src={logo} alt="" className={css.logo}/>
              </NamedLink>
          </div>
        </div>
         <div class="two wide column">
         </div>
      
        <div class="four wide column">
          <div className={css.infoLinks}>
               {socialMediaLinks}
          </div>
        </div>
      </div>
      
      <div className='ui row'>
       <div className={css.organization} id="organization">
         <div className={css.organizationInfo}>  
             <p className={css.organizationCopyright}>
               <NamedLink name="LandingPage" className={css.copyrightLink}>
                 <FormattedMessage id="Footer.copyright" />
               </NamedLink>
             </p>
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

    //   <div className={css.topBorderWrapper}>
    //     <div className={css.content}>          
    //       <div className={css.links}>
    //         <div className={css.infoLinks}>
    //           <ul className={css.list}>
    //             <li className={css.listItem}>
    //             <NamedLink name="AboutPage" className={css.link}>
    //               <FormattedMessage id="Footer.toAboutPage" />
    //             </NamedLink>
    //             </li>                
    //           </ul>
    //         </div>
    //         <div className={css.infoLinks}>
    //           <ul className={css.list}>
    //             <li className={css.listItem}>
    //             <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
    //               <FormattedMessage id="Footer.privacyPolicy" />
    //             </NamedLink>
    //             </li>                
    //           </ul>
    //         </div>
    //         <div className={css.infoLinks}>
    //           <ul className={css.list}>
    //             <li className={css.listItem}>
    //             <NamedLink name="TermsOfServicePage" className={css.legalLink}>
    //               <FormattedMessage id="Footer.termsOfUse" />
    //             </NamedLink>
    //             </li>                
    //           </ul>
    //       </div>
    //       <div className={css.infoLinks}>
    //         <ul className={css.list}>
    //           <li className={css.listItem}>
    //           <NamedLink name="ContactUsPage" className={css.legalLink}>
    //           <FormattedMessage id="Footer.toContactUsPage" />
    //         </NamedLink>
    //           </li>                
    //         </ul>
    //       </div>
    //       <div className={css.infoLinks}>
    //         <ul className={css.list}>
    //           <li className={css.listItem}>
    //             <NamedLink name="LandingPage" className={css.legalLink}>
    //               <img src={logo} alt="" className={css.logo}/>
    //             </NamedLink>
                 
    //           </li>                
    //         </ul>
    //       </div>
    //       <div className={css.infoLinks}>
    //         <ul className={css.list}>
    //           <li className={css.listItem}>
    //             {socialMediaLinks}
    //           </li>                
    //         </ul>
    //       </div>  
    //     </div>
    //       <div className={css.organization} id="organization">
    //         <div className={css.organizationInfo}>                
    //           <p className={css.organizationCopyright}>
    //             <NamedLink name="LandingPage" className={css.copyrightLink}>
    //               <FormattedMessage id="Footer.copyright" />
    //             </NamedLink>
    //           </p>
    //         </div>
    //       </div>
    //       <div className={css.copyrightAndTermsMobile}>
    //         <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
    //           <FormattedMessage id="Footer.copyright" />
    //         </NamedLink>
    //         <div className={css.tosAndPrivacyMobile}>
    //           <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
    //             <FormattedMessage id="Footer.privacy" />
    //           </NamedLink>
    //           <NamedLink name="TermsOfServicePage" className={css.terms}>
    //             <FormattedMessage id="Footer.terms" />
    //           </NamedLink>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
