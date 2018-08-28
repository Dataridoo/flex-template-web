/**
 *  TopbarMobileMenu prints the menu content for authenticated user or
 * shows login actions for those who are not authenticated.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';

import { stringify } from '../../util/urlHelpers';
import { createResourceLocatorString } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';
import { IconSearch, Button } from '../../components';
import { LocationSearchForm } from '../../forms';
import { TopbarSearchForm } from '../../forms';
import config from '../../config';

import { AvatarLarge, InlineTextButton, NamedLink, NotificationBadge } from '../../components';

import css from './TopbarMobileMenu.css';

const TopbarMobileMenu = props => {
  const {
    isAuthenticated,
    currentPage,
    currentUserHasListings,
    currentUser,
    notificationCount,
    onLogout,
    history, 
    location,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;

  const rentalsPage = (
    <NamedLink name="RentalsListPage" className={css.rentalsPage}>
      <span className={css.rentals}>
        <FormattedMessage id="TopbarDesktop.rentals" />
      </span>
    </NamedLink>   
  )
   const merchantPage = (
    <NamedLink name="MerchantPage" className={css.merchantPage}>
      <span className={css.merchant}>
        <FormattedMessage id="TopbarDesktop.merchant" />
      </span>
    </NamedLink>   
  );
 
  const guidedToursPage = (
    <NamedLink name="GuidedToursPage" className={css.guidedToursPage}>
      <span className={css.guidedTours}>
        <FormattedMessage id="TopbarMobile.guidedTours" />
      </span>
    </NamedLink>
  )

  const aboutPage = (
    <NamedLink name="AboutPage" className={css.aboutPage}>
      <span className={css.about}>
        <FormattedMessage id="TopbarDesktop.about" />
      </span>
    </NamedLink>
  )
/* 
  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      form="TopbarSearchFormDesktop"
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
    />
  ); 
   */

  const handleMobileSearchClick = () => {
    const params = { mobilesearch: 'open' };
    const path = `${location.pathname}?${stringify(params)}`;
    history.push(path);
  };

  const handleSearchSubmit = values => {
    const { search, selectedPlace } = values.location;
    const { origin, bounds } = selectedPlace;
    const originMaybe = config.sortSearchByDistance ? { origin } : {};
    const searchParams = { ...originMaybe, address: search, bounds };
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, searchParams));
  };


  const user = ensureCurrentUser(currentUser);

  if (!isAuthenticated) {
    const signup = (
      <NamedLink name="SignupPage" className={css.signupLink}>
        <FormattedMessage id="TopbarMobileMenu.signupLink" />
      </NamedLink>
    );


    const login = (
      <NamedLink name="LoginPage" className={css.loginLink}>
        <FormattedMessage id="TopbarMobileMenu.loginLink" />
      </NamedLink>
    );
   
    const signupOrLogin = (
      <span className={css.authenticationLinks}>
        <FormattedMessage id="TopbarMobileMenu.signupOrLogin" values={{ signup, login}} />       
      </span>
    );
    return (
      <div className={css.root}>        
        <div className={css.content}>           
          <LocationSearchForm className={css.desktopSearchForm} onSubmit={handleSearchSubmit} />
          <div className={css.borderBottom}>  
            <button className={css.mobileMenuBtn}> {rentalsPage}</button>          
            <button className={css.mobileMenuBtn}> {merchantPage}</button>
            <button className={css.mobileMenuBtn}>{guidedToursPage}</button>
            <button className={css.mobileMenuBtn}> {aboutPage}</button>
          </div>          
          <div className={css.authenticationGreeting}>
            <FormattedMessage
              id="TopbarMobileMenu.unauthorizedGreeting"
              values={{ lineBreak: <br />, signupOrLogin }}
            />           
          </div>
        </div>
         
       
        <div className={css.footer}>
          <NamedLink className={css.createNewListingLink} name="NewListingPage">
            <FormattedMessage id="TopbarMobileMenu.newListingLink" />
          </NamedLink>
        </div>      
      </div>
    );
  }

  

  const notificationCountBadge =
    notificationCount > 0 ? (
      <NotificationBadge className={css.notificationBadge} count={notificationCount} />
    ) : null;

  const displayName = user.attributes.profile.firstName;
  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };


  return (
    <div className={css.root}> 
      <div >  
      <LocationSearchForm className={css.desktopSearchForm} onSubmit={handleSearchSubmit} />
        <div className={css.borderBottom}>  
          <button className={css.mobileMenuBtn}> {rentalsPage}</button>          
          <button className={css.mobileMenuBtn}> {merchantPage}</button>
          <button className={css.mobileMenuBtn}>{guidedToursPage}</button>
          <button className={css.mobileMenuBtn}> {aboutPage}</button>
        </div>          
      </div>     
        
       <AvatarLarge className={css.avatar} user={currentUser} />
      <div className={css.content}>
        
        <span className={css.greeting}>
          <FormattedMessage id="TopbarMobileMenu.greeting" values={{ displayName }} />
        </span>
        <InlineTextButton className={css.logoutButton} onClick={onLogout}>
          <FormattedMessage id="TopbarMobileMenu.logoutLink" />
        </InlineTextButton>
        <NamedLink
          className={classNames(css.inbox, currentPageClass('InboxPage'))}
          name="InboxPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <FormattedMessage id="TopbarMobileMenu.inboxLink" />
          {notificationCountBadge}
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ManageListingsPage'))}
          name="ManageListingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.yourListingsLink" />
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ProfileSettingsPage'))}
          name="ProfileSettingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.profileSettingsLink" />
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('AccountSettingsPage'))}
          name="AccountSettingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.accountSettingsLink" />
        </NamedLink>
      </div>
      <div className={css.footer}>
        

        <NamedLink className={css.createNewListingLink} name="AddServicePage">
          <FormattedMessage id="TopbarMobileMenu.newListingLink" />
        </NamedLink>
      </div>  
    </div>
  );
};

TopbarMobileMenu.defaultProps = { 
  currentUser: null, 
  notificationCount: 0, 
  currentPage: null,
  initialSearchFormValues: {},
};

const { bool, func, number, string, object} = PropTypes;

TopbarMobileMenu.propTypes = {
  isAuthenticated: bool.isRequired,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,  
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  notificationCount: number,
  onLogout: func.isRequired,
};

export default TopbarMobileMenu;
