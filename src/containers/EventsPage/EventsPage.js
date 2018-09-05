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
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/pedalworldFacebook-1200x630.jpg';
import twitterImage from '../../assets/pedalworldTwitter-600x314.jpg';


import eventsImage from './images/events.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import css from './EventsPage.css';


export const EventsPageComponent = props => {
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
        <img src={eventsImage} alt="rentals" style={{ display: 'block', marginTop:'20px', maxWidth: '100%', width:'100%',   height: 'auto'}}/>                     
    </div>
    <div className="container">
      <div className={css.MainEventsContainer}>
       <h1 className={css.borderAll}>ALL</h1>
        <div className="row">
          <div className="col-md-8">
            <h2>Amazing Trail Endurance weekend</h2>
            <h3>4 to 7 October 2018 &nbsp; | &nbsp;
              <span className={css.textColorBlue}>Bike Hotel Concept Iso Syöte
              </span>
            </h3>
            <div className={css.descriptionBorder}>
              <p>Welcome to join the Mountain Bike Season ending weekend with us in the stunning location of Iso-Syöte</p>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card" >        
              <img className="card-img-top" src={img1} alt="bhcimage" style={{ display: 'block', marginTop:'20px', maxWidth: '100%', width:'100%', paddingBottom:'20px',  height: 'auto'}}/> 
          </div>    
          </div>
        </div>
        </div>
    </div>

    <div className="container">
      <div className={css.MainEventsContainer}>
        <div className="row">
          <div className="col-md-8">
            <h2>Syöte MTB</h2>
            <h3>4 to 7 October 2018 &nbsp; | &nbsp;
              <span className={css.textColorBlue}>Bike Hotel Concept Iso Syöte
              </span>
            </h3>
            <div className={css.descriptionBorder}>
              <p>Welcome to join the Mountain Bike Season ending weekend with us in the stunning location of Iso-Syöte</p>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card" >        
              <img className="card-img-top" src={img2} alt="bhcimage" style={{ display: 'block', marginTop:'20px', maxWidth: '100%', width:'100%', paddingBottom:'20px',  height: 'auto'}}/> 
          </div>    
          </div>
        </div>
        </div>
    </div>
    <div className="container">
      <div className={css.MainEventsContainer}>
        <div className="row">
          <div className="col-md-8">
            <h2>Amazing Trail Endurance weekend</h2>
            <h3>4 to 7 October 2018 &nbsp; | &nbsp; 
              <span className={css.textColorBlue}>Bike Hotel Concept Iso Syöte
              </span>
            </h3>
            <div className={css.descriptionBorder}>
              <p>Welcome to join the Mountain Bike Season ending weekend with us in the stunning location of Iso-Syöte</p>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card" >        
              <img className="card-img-top" src={img3} alt="bhcimage" style={{ display: 'block', marginTop:'20px', maxWidth: '100%', width:'100%', paddingBottom:'20px',  height: 'auto'}}/> 
          </div>    
          </div>
        </div>
        </div>
    </div>
    <div className="container">
      <div className={css.MainEventsContainer}>
        <div className="row">
          <div className="col-md-8">
          <h2>Syöte MTB</h2>
            <h3>4 to 7 October 2018 &nbsp; | &nbsp;
              <span className={css.textColorBlue}>Bike Hotel Concept Iso Syöte
              </span>
            </h3>
            <div className={css.descriptionBorder}>
              <p>Welcome to join the Mountain Bike Season ending weekend with us in the stunning location of Iso-Syöte</p>
            </div>

          </div>
          <div className="col-md-4">
            <div className="card" >        
              <img className="card-img-top" src={img4} alt="bhcimage" style={{ display: 'block', marginTop:'20px', maxWidth: '100%', width:'100%', paddingBottom:'20px',  height: 'auto'}}/> 
          </div>    
          </div>
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



const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const EventsPage = compose(withRouter, connect(mapStateToProps), injectIntl)(EventsPageComponent);

export default EventsPage;
