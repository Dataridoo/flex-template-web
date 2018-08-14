import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import SectionMapMaybe from './SectionMapMaybe';
import config from '../../config';
import {
  Page,
  SectionLocationsMerchant,
  SectionLocationCenterMerchant,
 
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/pedalworldFacebook-1200x630.jpg';
import twitterImage from '../../assets/pedalworldTwitter-600x314.jpg';
import rentalsImage from './rentals.jpg';
import ReactPlayer from 'react-player';
import css from './MerchantPage.css';
import './MerchantPage.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className={css.sectionVideo}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=Fwkq6lqRW3w'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
      </div>
    );
  }
}

export const MerchantPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

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
             <img src={rentalsImage} alt="rentals" />
          </div>  
          
           <div className={css.PromotionBackground}>
            <ul className={css.sections}>
              <h1 className={css.highlights}>Promotions title</h1>
              <li className={css.section}>
                <div className={css.sectionContent}>
                 <SectionLocationsMerchant />
                </div>
              </li>
            </ul>
          </div>
         
          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionLocationCenterMerchant />
              </div>
            </li>
          </ul>
          
          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <div >
                 <VideoPlayer />
                </div>
            </div>
            </li>
          </ul>
          <div className="ui stackable grid">
            <div className="ui five wide column">
              <div className={css.NewsSection}>
               <div className={css.News}> 
                 <p className={css.MainHeader}> News </p>
                  <div className={css.NewsBody}> 
                    <p className={css.NewsDate}> June 30, 2018 </p>
                    <p className={css.NewsHeader}> Header </p>
                    <p>Pedal.world is your online destination for planning a cycling or biking holiday in Europe.</p>
                    <p className={css.readMore}>Read more -></p>
                  </div>
                </div>
               </div>
              </div>
              <div className="ui five wide column">
              <div className={css.NewsSection}>
               <div className={css.News}> <br />
                
                  <div className={css.NewsBody}> 
                    <p className={css.NewsDate}> June 30, 2018 </p>
                    <p className={css.NewsHeader}> Header </p>
                    <p>Pedal.world is your online destination for planning a cycling or biking holiday in Europe.</p>
                    <p className={css.readMore}>Read more -></p>
                  </div>
                </div>
               </div>
              </div>
              <div className="ui five wide column">
              <div className={css.NewsSection}>
               <div className={css.News}> <br />
                
                  <div className={css.NewsBody}> 
                    <p className={css.NewsDate}> June 30, 2018 </p>
                    <p className={css.NewsHeader}> Header </p>
                    <p>Pedal.world is your online destination for planning a cycling or biking holiday in Europe.</p>
                    <p className={css.readMore}>Read more -></p>
                  </div>
                </div>
               </div>
              </div>
            </div>
           
         
         
            <div className="ui stackable grid">
                <div className="ui eight wide column">
                  <div className={css.AboutSection}>
                   <div className={css.About}> 
                     <p className={css.AboutHeader}> About </p>
                     <div className={css.AboutBody}> 
                        <p>Pedal.world is your online destination for planning a cycling or biking holiday in Europe.</p>
<p>We offer an overview and online booking options for bike guide services, rentals and accommodation.</p>
<p>We promote all disciplines ranging from road cycling over mountainbiking to e-bikes and fat bikes for beginners to enthusiasts alike.</p>
                     </div>
                   </div>
                  </div>
                </div>
              <div className="ui eight wide column">
                <div className={css.MapSection}>
                  Map section
                </div>
              </div>
            </div>
         
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
        <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

MerchantPageComponent.propTypes = {
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
const MerchantPage = compose(withRouter, connect(mapStateToProps), injectIntl)(MerchantPageComponent);

export default MerchantPage;
