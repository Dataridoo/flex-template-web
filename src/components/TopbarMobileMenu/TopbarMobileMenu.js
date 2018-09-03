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
          <div className="ui four item menu">
            <a class="active item">{rentalsPage}</a>
            <a class="item">{merchantPage}</a>
            <a class="item">{guidedToursPage}</a>
            <a class="item">{aboutPage}</a>
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
        <div className={css.borderBottom}>              
          <div className="ui inverted five item menu">
            <a className="active blue item">{rentalsPage}</a>
            <a className=" active blue item">{merchantPage}</a>
            <a className=" active blue item">{guidedToursPage}</a>
            <a className=" active blue item">{aboutPage}</a>
            <a className=" active blue item">{aboutPage}</a>
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
  initialSearchFormValues: object,
  notificationCount: number,
  onLogout: func.isRequired,
};

export default TopbarMobileMenu;
