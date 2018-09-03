import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';

import config from '../../config';
import {
  Page,
 
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';
import SectionTop from './SectionTop/SectionTop';
import SectionCenter from './SectionCenter/SectionCenter';
import facebookImage from '../../assets/pedalworldFacebook-1200x630.jpg';
import twitterImage from '../../assets/pedalworldTwitter-600x314.jpg';
import bhcImage from './image/bhc.JPG';
import VideoPlayer from './VideoPlayer';
import NewsSection from './NewsSection';
import AboutSection from './AboutSection';



import css from './MerchantPage.css';
import './MerchantPage.css';


export const MerchantPageComponent = props => {
  const { intl, scrollingDisabled } = props;

  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;
  

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer /> 
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>       

          <div className="container">
            <img src={bhcImage} alt="rentals" style={{ display: 'block', marginTop:'20px', maxWidth: '100%', width:'100%',   height: 'auto'}}/>               
          </div>
         
           <SectionTop />
           <SectionCenter /> 
             <VideoPlayer />
            <NewsSection />
            <AboutSection />         
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
        <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool } = PropTypes;

MerchantPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const MerchantPage = compose(withRouter, connect(mapStateToProps), injectIntl)(MerchantPageComponent);

export default MerchantPage;
