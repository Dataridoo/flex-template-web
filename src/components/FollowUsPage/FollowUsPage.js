import React from 'react';
import { string } from 'prop-types';
import config from '../../config';
import { injectIntl, intlShape } from 'react-intl';
import { twitterPageURL} from '../../util/urlHelpers';

import { ExternalLink } from '../../components';

  const renderYoutubeLink = () => {
    const { siteYoutubePage } = config;      
    const youtubeLink = siteYoutubePage ? (
          <ExternalLink
              key="linkToYoutube"
              href={siteYoutubePage}
            >
            <i className="youtube black icon"></i>
          </ExternalLink>     
    ) : null;
    
    return youtubeLink;
    };

  const renderFacebookLink = () => {
    const { siteFacebookPage } = config;        
    const fbLink = siteFacebookPage ? (     
        <ExternalLink key="linkToFacebook" href={siteFacebookPage} >
          <i className="facebook black icon"></i> 
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
        <i className="twitter black icon"></i>
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
          <i className="instagram black icon"></i>
        </ExternalLink>
        
      ) : null;
    
      return instagramLink;
      };
    
  
const FollowUsPage = props => {
  const {intl } = props;
  
  const facebook = renderFacebookLink(intl);
  const twitter = renderTwitterLink(intl);
  const youtube = renderYoutubeLink(intl);
   const instagram = renderInstaLink(intl);
             
 
  return (
    <span className="ui icon buttons">
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
        <button className="ui button">
            Follow Us 
        </button>
    </span>
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

