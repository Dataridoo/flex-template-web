import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';

import { FormattedMessage } from 'react-intl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './EventsPage.css';


const EventsPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  
  const addBike = (
    <NamedLink name="NewListingPage" className={css.newListingPage}>
      <span className={css.newListing}> <i className="ui plus icon"></i>
        <FormattedMessage id="Footer.toNewListingPage" />
       </span>
    </NamedLink>    
  )

  // prettier-ignore
  return (
    <StaticPage
      title="Rentals"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'EventsPage',
        description: 'About Events',
        name: 'Events page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Events page</h1>
            {addBike}

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              
            </div>

            <div className={css.contentMain}>
              
            
              
              <p>
              
                <ExternalLink href="http://pedalworld.com">pedalworld</ExternalLink>
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
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

export default EventsPage;
