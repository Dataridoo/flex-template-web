import React from 'react';
import { string } from 'prop-types';
import config from '../../config';
import { injectIntl, intlShape } from 'react-intl';
import { twitterPageURL} from '../../util/urlHelpers';
import classNames from 'classnames';
import { ExternalLink } from '../../components';
import css from './FollowUsPage.css';
 

  const renderYoutubeLink = () => {
    const { siteYoutubePage } = config;      
    const youtubeLink = siteYoutubePage ? (
          <ExternalLink
              key="linkToYoutube"
              href={siteYoutubePage}
            >
            <i className="youtube icon"></i>
          </ExternalLink>     
    ) : null;
    
    return youtubeLink;
    };

  const renderFacebookLink = () => {
    const { siteFacebookPage } = config;        
    const fbLink = siteFacebookPage ? (     
        <ExternalLink key="linkToFacebook" href={siteFacebookPage} >
          <i className="facebook icon"></i> 
        </ExternalLink>     
    ) : null;

    return fbLink;
  };
  
  const renderTwitterLink = () => {
    const { siteTwitterHandle} = config;
    const siteTwitterPage = twitterPageURL(siteTwitterHandle);     
    const twitterLink = siteTwitterPage ? (
        <ExternalLink
          key="linkToTwitter"
          href={siteTwitterPage}         
        >
        <i className="twitter icon"></i>
      </ExternalLink>   
    ) : null;
  
      return twitterLink;
    };

    const renderInstaLink = () => {
      const {siteInstagramPage } = config;
      const instagramLink = siteInstagramPage ? (      
          <ExternalLink
            key="linkToInstagram"
            href={siteInstagramPage}
          >
          <i className="instagram icon"></i>
        </ExternalLink>
        
      ) : null;
    
      return instagramLink;
      };
    
  
const FollowUsPage = props => {
  const { rootClassName, className, intl } = props;
  const classes = classNames(rootClassName || css.root, className);

  const facebook = renderFacebookLink(intl);
  const twitter = renderTwitterLink(intl);
  const youtube = renderYoutubeLink(intl);
   const instagram = renderInstaLink(intl);
             
 
  return (
    <div className={classes}>
      <button className="ui button">
        {youtube}
      </button>
      <button className="ui button">
       {facebook} 
      </button>
      <button className="ui button">
        {twitter}
      </button>
      <button className="ui button">
        {instagram}
      </button>
    </div>
  );
};


FollowUsPage.defaultProps = {
  rootClassName: null,
  className: null,
};

FollowUsPage.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(FollowUsPage);

