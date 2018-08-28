import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import config from '../../config';
import {
  Page,
  SectionLocations,
  SectionLocationCenter,
  SectionLocationsBottom,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  FollowUsPage
} from '../../components';
import { TopbarContainer } from '../../containers';
import SectionTopLinks from './SectionTopLinks';

import facebookImage from '../../assets/pedalworldFacebook-1200x630.jpg';
import twitterImage from '../../assets/pedalworldTwitter-600x314.jpg';
import css from './LandingPage.css';
import rentals from './images/rentals.jpg';

import InstagramFeed from './InstagramFeed';
import './LandingPage.css';

export const LandingPageComponent = props => {
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
          <div className={css.heroContainer}>           
            <img src={rentals} alt="rentals"/>
            <h1 className={css.heroMainTitle}>
              <FormattedMessage id="SectionHero.title" />
            </h1> 
          </div> <br />
          
          <div className={css.sections}>               
              <div className={css.sectionContent}>              
                <SectionTopLinks />
              </div>
            </div>
           
          <div className={css.sectionLocationBackground}>                 
            <ul className={css.sections}>
                <h1 className={css.highlights}><FormattedMessage id="SectionHero.highlights" /></h1>
                <li className={css.section}>
                  <div className={css.sectionContent}>              
                    <SectionLocations /> 
                  </div>
                </li>
            </ul>
          </div> 
         
          <ul className={css.sections}>
            <h1 className={css.highlights}>
              <FormattedMessage id= "SectionHero.explorCategory" />
            </h1>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionLocationCenter />
              </div>
            </li>
          </ul>
          
            <ul className={css.sections}>                       
              <h3 className={css.recently}>Recently@ #pedalworld &nbsp; &nbsp;
                  <FollowUsPage />
              </h3>
            </ul><br/>  
          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContent}>
              <SectionLocationsBottom />
              </div>
            </li>
          </ul>
          <ul className={css.sections}>
          <li className={css.section}>
            <div className={css.sectionContent}>
              <div id ="instafeedTarget">
                 <InstagramFeed />  
                </div>
            </div>
          </li>
        </ul>
         
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
        <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const LandingPage = compose(withRouter, connect(mapStateToProps), injectIntl)(LandingPageComponent);

export default LandingPage;
