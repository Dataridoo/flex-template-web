import React from 'react';
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
  NamedLink
} from '../../components';

import css from './AboutPage.css';


      
   

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Pedalworld',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>  Pedal.world launching August 30th</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Pedal.world is developed by Dataridoo Oy. We are based in Helsinki, Finland.
              </p>
            <h3 id="contact" className={css.subtitle}>
                  Contact us  <ExternalLink href="/"> maarten@dataridoo.com</ExternalLink>. 
              </h3>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
           

            <div className={css.contentMain}>
              <p> 
                Pedal.world is your online destination for planning a cycling or biking holiday in Europe.
              </p>
               <p> 
                We offer an overview and online booking options for bike guide services, rentals and accommodation.
               </p>
                <p>
                  We promote all disciplines ranging from road cycling over mountainbiking to e-bikes and fat bikes for beginners to enthusiasts alike. 
                 </p>
                <p>
                Read user reviews, contact professionals offering services, view booking options in realtime and pay your holiday online in a trusted environment.
              </p>

              <h3 className={css.subtitle}>Interested?</h3>
              <p>
               Leave us your e-maila address and we’ll keep you up to date.
               </p>
               <p>
               <NamedLink name="SignupPage">signup here</NamedLink>
              </p>
              
              <p>
                A professional offering services listed above and interested in featuring on pedal.world?
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

export default AboutPage;
