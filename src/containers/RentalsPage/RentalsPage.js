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
  RangeSlider,
  CardListPage,
  CardNavigationPage,
} from '../../components';
import { TopbarContainer } from '../../containers';


import facebookImage from '../../assets/pedalworldFacebook-1200x630.jpg';
import twitterImage from '../../assets/pedalworldTwitter-600x314.jpg';
import rentalsImage from '../RentalsPage/rentals.jpg';
import css from './RentalsPage.css';





export const LandingPageComponent = props => {
  const { intl, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
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
            <img src={rentalsImage} alt="rentals"/>
            <div className="ui stackable column grid">             
              <div className="column">
                 <CardNavigationPage /> 
              </div>
            </div>
            </div> 

            <div className={css.givemargin}>
                  <div className="ui stackable sixteen column grid">             
                    <div className="four wide column">
                      <div >
                        <h3>ALL CATEGORIES</h3>
                        <p>CITY BIKES</p>
                        <p>ROAD BIKES</p>
                        <p>MOUNTAIN BIKES</p>
                        <p>E-BIKES</p> <br/>
                        <p>price</p> <hr/>
                        <RangeSlider />
                      </div>  <br/>
                      <span> 
                        <button className="ui primary button"> Update View</button>
                      </span> 
                    </div>              
                  <div className="twelve wide column"><CardListPage /></div>
                </div>
                </div>
                   
          <br/>
                
                
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

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const RentalsPage = compose(withRouter, connect(mapStateToProps), injectIntl)(LandingPageComponent);

export default RentalsPage;
