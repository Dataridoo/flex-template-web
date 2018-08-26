import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
} from '../../components';
import css from './AddServicePage.css';

import ImageOne from './images/bhc4.jpg';
import ImageTwo from './images/bhc5.jpg';
import ImageThree from './images/bhc6.jpg';
import ImageFour from './images/bhc7.jpg';

const addBikeRentals = (name, image, searchQuery) => {
  return (
    <NamedLink name="NewListingPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>     
    </NamedLink>
  );
};


const guidedTourPage = (name, image, searchQuery) => {
  return (
    <NamedLink name="NewListingPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>     
    </NamedLink>
  );
};

const eventsPage = (name, image, searchQuery) => {
  return (
    <NamedLink name="NewListingPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>     
    </NamedLink>
  );
};


const accomodationPage = (name, image, searchQuery) => {
  return (
    <NamedLink name="NewListingPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <img src={image} alt={name} className={css.locationImage} />
        </div>
      </div>     
    </NamedLink>
  );
};

const AddServicePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  return (
    <StaticPage
        title="AddServicePage"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'AddServicePage',
          description: 'Add Service',
          name: 'Add Service',
        }}
      >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer /> 
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
        <div className={css.PromotionMargin}>
          <div className={css.addServicesTitle}><h1 className={css.addServiceHeader}>SELECT SERVICE</h1></div>
          <div className={css.locations}>
            {addBikeRentals(
              '',
              ImageOne          
            )}
            {guidedTourPage(
              '',
              ImageTwo          
            )}
          
            {eventsPage(
              '',
              ImageThree          
            )}
            {accomodationPage(
              '',
              ImageFour          
            )}
          </div>
        </div>
      </LayoutWrapperMain>
      <LayoutWrapperFooter>
      <Footer />
      </LayoutWrapperFooter>
    </LayoutSingleColumn>
    </StaticPage>
  );
};

AddServicePage.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

AddServicePage.propTypes = {
  rootClassName: string,
  className: string,
};

export default AddServicePage;
